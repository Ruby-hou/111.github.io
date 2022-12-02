// set the dimensions and margins of the graph
const width = 450,
  height = 450,
  margin = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
const radius3 = Math.min(width, height) / 2 - margin;

// create data_set
const data1 = {
  Restaurants: 323905,
  Shopping: 26876,
  Food: 33803,
  Beauty: 19343,
  Home: 10077,
  Automotive: 12099
}
const data2 = {
  Food: 62496,
  Automotive: 34792,
  Restaurants: 763837,
  Shopping: 57060,
  Beauty: 51614,
  Home: 31240,
}
const data3 = {
  Beauty: 302107,
  Home: 169992,
  Food: 387517,
  Automotive: 187826,
  Restaurants: 4561279,
  Shopping: 381779,
}

// set the color scale
const color3 = d3.scaleOrdinal()
  .domain(["a", "b", "c", "d", "e"])
  .range(d3.schemeDark2);

// A function that create / update the plot for a given variable:
function update(data) {
  d3.select("#my_dataviz").selectAll("*").remove();
  const svg3 = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  // Compute the position of each group on the pie:
  const pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(d => d[1])
  const data_ready = pie(Object.entries(data))

  // The arc generator
  const arc = d3.arc()
    .innerRadius(radius3 * 0.45)         // This is the size of the donut hole
    .outerRadius(radius3 * 0.7)

  // Another arc that won't be drawn. Just for labels positioning
  const outerArc = d3.arc()
    .innerRadius(radius3 * 0.8)
    .outerRadius(radius3 * 0.8)

  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg3
    .selectAll('allSlices')
    .data(data_ready)
    .join('path')
    .transition()
    .duration(1000)
    .attr('d', arc)
    .attr('fill', d => color3(d.data[1]))
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)

  // Add the polylines between chart and labels:
  svg3
    .selectAll('allPolylines')
    .data(data_ready)
    .join('polyline')
    .transition()
    .duration(1000)
    .attr("stroke", "black")
    .style("fill", "none")
    .attr("stroke-width", 1)
    .attr('points', function (d) {
      const posA = arc.centroid(d) // line insertion in the slice
      const posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
      const posC = outerArc.centroid(d); // Label position = almost the same as posB
      const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
      posC[0] = radius3 * 0.8 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
      return [posA, posB, posC]
    })

  // Add the polylines between chart and labels:
  svg3
    .selectAll('allLabels')
    .data(data_ready)
    .join('text')
    .transition()
    .duration(1000)
    .text(d => d.data[0])
    .attr('transform', function (d) {
      const pos = outerArc.centroid(d);
      const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
      pos[0] = radius3 * 0.85 * (midangle < Math.PI ? 1 : -1);
      return `translate(${pos})`;
    })
    .style('text-anchor', function (d) {
      const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
      return (midangle < Math.PI ? 'start' : 'end')
    })
    .style('font-size', "12px");

  svg3
    .append("text")
    .attr("text-anchor", "start")
    .attr("y", -200)
    .attr("x", -200)
    .text("Donut chart for review counts and categories")
    .style("fill", "black")
    .style("font-size", "19px");



  // Compute the position of each group on the pie:
  /*const pie = d3.pie()
  .sort(null) // Do not sort group by size
  .value(d => d[1])
  const data_ready = pie(Object.entries(data))
  
  // The arc generator
  const arc = d3.arc()
  .innerRadius(radius3 * 0.5)         // This is the size of the donut hole
  .outerRadius(radius3 * 0.8)
  
  // Another arc that won't be drawn. Just for labels positioning
  const outerArc = d3.arc()
  .innerRadius(radius3 * 0.9)
  .outerRadius(radius3 * 0.9)
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg3
  .selectAll('allSlices')
  .data(data_ready)
  .join('path')
  .transition()
  .duration(1000)
  .attr('d', arc)
  .attr('fill', d => color3(d.data[1]))
  .attr("stroke", "white")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)
  
  // Add the polylines between chart and labels:
  svg3
  .selectAll('allPolylines')
  .data(data_ready)
  .join('polyline')
  .transition()
  .duration(1000)
  .attr("stroke", "black")
  .style("fill", "none")
  .attr("stroke-width", 1)
  .attr('points', function(d) {
    const posA = arc.centroid(d) // line insertion in the slice
    const posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
    const posC = outerArc.centroid(d); // Label position = almost the same as posB
    const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
    posC[0] = radius3 * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
    return [posA, posB, posC]
  })
  
  // Add the polylines between chart and labels:
  svg3
  .selectAll('allLabels')
  .data(data_ready)
  .join('text')
  .transition()
  .duration(1000)
  .text(d => d.data[0])
  .attr('transform', function(d) {
      const pos = outerArc.centroid(d);
      const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
      pos[0] = radius3 * 0.99 * (midangle < Math.PI ? 1 : -1);
      return `translate(${pos})`;
  })
  .style('text-anchor', function(d) {
      const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
      return (midangle < Math.PI ? 'start' : 'end')
  })*/


}

// Initialize the plot with the first dataset
update(data3)