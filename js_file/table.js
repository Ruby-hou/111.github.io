
  
  var dataTable = dc.dataTable("#dc-table-graph");

  var dim = {},     // Stores all crossfilter dimensions
      groups = {},  // Stores all crossfilter groups
      cf;

  d5.json("./data/table_us.json", function(error, data) {
    console.log(data);
    if (error) throw error;

    // Programmatically insert header labels for table
    var tableHeader = d5.select(".table-header")
      .selectAll("th");

    // Bind data to tableHeader selection.
    tableHeader = tableHeader.data(
      [
        {field_name: "State", label: "State", sort_state: "descending"},
        {field_name: "business_cnt", label: "Business Count", sort_state: "ascending"},
        {field_name: "avg_review", label: "Average Review Count", sort_state: "ascending"},
        {field_name: "avg_stars", label: "Average Stars", sort_state: "ascending"},
        {field_name: "is_open", label: "Is_open rate(%)", sort_state: "descending"} // Note Max Conf row starts off as descending
      ]
    );

    // enter() into virtual selection and create new <th> header elements for each table column
    tableHeader = tableHeader.enter()
      .append("th")
        .text(function (d) { return d.label; }) // Accessor function for header titles
        .on("click", tableHeaderCallback);

    function tableHeaderCallback(d) {
      // Highlight column header being sorted and show bootstrap glyphicon
      var activeClass = "info";

      d5.selectAll("#dc-table-graph th") // Disable all highlighting and icons
          .classed(activeClass, false)
        .selectAll("span")
          .style("visibility", "hidden") // Hide glyphicon

      var activeSpan = d5.select(this) // Enable active highlight and icon for active column for sorting
          .classed(activeClass, true)  // Set bootstrap "info" class on active header for highlight
        .select("span")
          .style("visibility", "visible");

      // Toggle sort order state to user desired state
      d.sort_state = d.sort_state === "ascending" ? "descending" : "ascending";

      var isAscendingOrder = d.sort_state === "ascending";
      dataTable
        .order(isAscendingOrder ? d5.ascending : d5.descending)
        .sortBy(function(datum) { return datum[d.field_name]; });

      // Reset glyph icon for all other headers and update this headers icon
      activeSpan.node().className = ''; // Remove all glyphicon classes

      // Toggle glyphicon based on ascending/descending sort_state
      activeSpan.classed(
        isAscendingOrder ? "glyphicon glyphicon-sort-by-attributes" :
          "glyphicon glyphicon-sort-by-attributes-alt", true);

      updateTable();
      dataTable.redraw();
    }
    // Initialize sort state and sort icon on one of the header columns
    // Highlight "Max Conf" cell on page load
    // This can be done programmatically for user specified column
    tableHeader.filter(function(d) { return d.label === "Is_open rate(%)"; })
        .classed("info", true);

    var tableSpans = tableHeader
      .append("span") // For Sort glyphicon on active table headers
        .classed("glyphicon glyphicon-sort-by-attributes-alt", true)
        .style("visibility", "hidden")
      .filter(function(d) { return d.label === "Is_open rate(%)"; })
        .style("visibility", "visible");

    cf = crossfilter(data); // Main crossfilter objects


    // Setup different dimensions for plots
    dim.tableMaxConfidence = cf.dimension(function (d) {
      return d.is_open;
    });

    // ##############################
    // Generate the dc.js dataTable
    // ##############################
    // Create generating functions for each columns
    var columnFunctions = [
      function(d) { return d.State; },
      function(d) { return d.business_cnt},
      function(d) { return d.avg_review; },
      function(d) { return d.avg_stars; },
      function(d) { return d.is_open; },
    ];

    // Pagination implementation inspired by:
    // https://github.com/dc-js/dc.js/blob/master/web/examples/table-pagination.html
    dataTable.width(960).height(800)
      .dimension(dim.tableMaxConfidence)
      .group(function(d) { return "Dummy"}) // Must pass in. Ignored since .showGroups(false)
      .size(Infinity)
      .columns(columnFunctions)
      .showGroups(false)
      .sortBy(function(d){ return d.is_open; }) // Initially sort by is_open column
      .order(d5.descending);

    updateTable();
    dataTable.redraw();
  }); // End d5.json callback function

  // Data Table Pagination
  var tableOffset = 0, tablePageSize = 10;

  // updateTable calculates correct start and end indices for current page view
  // it slices and pulls appropriate date for current page from dataTable object
  // Finally, it updates the pagination button states depending on if more records
  // are available
  function updateTable() {
    // Ensure Prev/Next bounds are correct, especially after filters applied to dc charts
    var totFilteredRecs = cf.groupAll().value();
    // Adjust values of start and end record numbers for edge cases
    var end = tableOffset + tablePageSize > totFilteredRecs ? totFilteredRecs : tableOffset + tablePageSize;
    tableOffset = tableOffset >= totFilteredRecs ? Math.floor((totFilteredRecs - 1) / tablePageSize) * tablePageSize : tableOffset;
    tableOffset = tableOffset < 0 ? 0 : tableOffset; // In case of zero entries

    // Grab data for current page from the dataTable object
    dataTable.beginSlice(tableOffset);
    dataTable.endSlice(tableOffset + tablePageSize);

    // Update Table paging buttons and footer text
    d5.select('span#begin')
        .text(end === 0 ? tableOffset : tableOffset + 1); // Correct for "Showing 1 of 0" bug
    d5.select('span#end')
        .text(end);
    d5.select('#Prev.btn')
        .attr('disabled', tableOffset - tablePageSize < 0 ? 'true' : null);
    d5.select('#Next.btn')
        .attr('disabled', tableOffset + tablePageSize >= totFilteredRecs ? 'true' : null);
    d5.select('span#size').text(totFilteredRecs);

    dataTable.redraw();
  }
  // Callback function for clicking "Next" page button
  function nextPage() {
      tableOffset += tablePageSize;
      updateTable();
  }
  // Callback function for clicking "Prev" page button
  function prevPage() {
      tableOffset -= tablePageSize;
      updateTable();
  }
