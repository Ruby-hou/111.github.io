// set the dimensions and margins of the graph
const marginline = { top: 20, right: 40, bottom: 30, left: 60 },
  widthline = 460 - marginline.left - marginline.right,
  heightline = 400 - marginline.top - marginline.bottom;

var dataline1 =
  [{ stars: '1.0', value: '172' }, { stars: '1.5', value: '477' },
  { stars: '2.0', value: '831' }, { stars: '2.5', value: '1118' },
  { stars: '3.0', value: '1453' }, { stars: '3.5', value: '2092' },
  { stars: '4.0', value: '2464' }, { stars: '4.5', value: '2137' },
  { stars: '5.0', value: '1312' }];
var dataline2 =
  [{ stars: '1.0', value: '455' }, { stars: '1.5', value: '1041' },
  { stars: '2.0', value: '2229' }, { stars: '2.5', value: '3402' },
  { stars: '3.0', value: '4387' }, { stars: '3.5', value: '6114' },
  { stars: '4.0', value: '7014' }, { stars: '4.5', value: '5917' },
  { stars: '5.0', value: '3480' }];
var dataline3 =
  [{ stars: '1.0', value: '1986' }, { stars: '1.5', value: '4932' },
  { stars: '2.0', value: '9527' }, { stars: '2.5', value: '14316' },
  { stars: '3.0', value: '18453' }, { stars: '3.5', value: '26519' },
  { stars: '4.0', value: '31125' }, { stars: '4.5', value: '27181' },
  { stars: '5.0', value: '16307' }];


// Now I can use this dataset:
function updateLine(data) {
  d3.select("#chartline").selectAll("*").remove();
  console.log(data);
  // append the svg object to the body of the page
  const svgline = d3.select("#chartline")
    .append("svg")
    .attr("width", widthline + marginline.left + marginline.right)
    .attr("height", heightline + marginline.top + marginline.bottom)
    .append("g")
    .attr("transform", `translate(${marginline.left},${marginline.top})`);
  // Add X axis --> it is a date format
  const x = d3.scaleLinear()
    .domain(d3.extent(data, function (d) { return d.stars }))
    .range([0, widthline]);
  svgline.append("g")
    .attr("transform", `translate(0, ${heightline})`)
    .call(d3.axisBottom(x));

  // Add Y axis
  const y = d3.scaleLinear()
    .domain([0, d3.max(data, function (d) { return +d.value; })])
    .range([heightline, 0]);
  svgline.append("g")
    .call(d3.axisLeft(y));
    
  // Add the line
  svgline.append("path")
    .data([data])
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x(function (d) { return x(d.stars) })
      .y(function (d) { return y(d.value) })
    )
  // Add titles
  // svgline
  //   .append("text")
  //   .attr("text-anchor", "start")
  //   .attr("y", 0)
  //   .attr("x", marginline.left / 2)
  //   .text("Line Chart for stars and count")
  //   .style("fill", "black")
  //   .style("font-size", "17px");

  svgline
    .append("text")
    .attr("text-anchor", "start")
    .attr("y", -marginline.right+50 )
    .attr("x", -widthline / 2 +150)
    .text("Count")
    .style("fill", "black")
    .attr("transform", "rotate(-90)")
    .style("font-size", "12px");

  svgline
    .append("text")
    .attr("text-anchor", "start")
    .attr("y", widthline + marginline.bottom / 3 + 10)
    .attr("x", heightline / 2)
    .text("Stars")
    .style("fill", "black")
    .style("font-size", "12px");

};
updateLine(dataline3);