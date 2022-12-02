var margin = { top: 50, left: 100, bottom: 50, right: 100 },
width3 = 1050 - margin.left - margin.right,
height3 = 1060 - margin.top - margin.bottom;



var svg4 = d3.select("#chart4"),

radius3 = Math.min(width3, height3) / 2-80,
g4= svg4.append("g").attr("transform", "translate(" + (width3+80) / 2 + "," + (height3+80) / 2 + ")");

 var colorp4= d3.scaleOrdinal( ["#0048BA","#B0BF1A","#7CB9E8","#B284BE","#2E2D88","#FFBCD9",
      "#DB2D43","#EFDECD","#9F2B68","#FFBF00","#D0FF14","#00FFFF","#E9D66B",
      "#FF9966","#89CFF0","#F4C2C2","#536878","#CAE00D","#318CE7","#CB4154","#8B008B","#00BFFF"]);

var path3 = d3.arc()
    .outerRadius(radius3 *0.9)
    .innerRadius(0);

var label3 = d3.arc()
    .outerRadius(radius3 - 130)
    .innerRadius(radius3 - 130);
var outerArc = d3.arc()
    .innerRadius(radius3 * 0.8)
    .outerRadius(radius3 * 0.8);

    var pie3 = d3.pie()
    .sort(null)
    .value(function(d) {return d.count; } );


d3.json("./data/weekend_pie.json").then(result => {
    
    function calcTranslate(data, move = 4) {
        const moveAngle = data.startAngle + ((data.endAngle - data.startAngle) / 2);
        return `translate(${- move * Math.cos(moveAngle + Math.PI / 2)}, ${- move * Math.sin(moveAngle + Math.PI / 2)})`;
        };
    
 
const duration = 250;
var arc3 = g4.selectAll(".arc")
.data(pie3(result))
.enter().append("g")
    .attr("class", "arc")
    .style('cursor', 'pointer')
    .on('mouseover', (event, v) => {
d3.select(event.currentTarget)
                .transition()
                .duration(duration)
                .attr('transform', calcTranslate(v, 16));
d3.select(event.currentTarget).select('path')
                .transition()
                .duration(duration)
                .attr('stroke', 'rgba(100, 100, 300, 0.2)')
                .attr('stroke-width', 5)
                .attr('stroke','black');
d3.select('.card-back text').text(v.data.hours);
            
d3.select(event.currentTarget)
    
    .append('polyline')
    .attr('id','line')
    .attr("stroke", "black")
    .style("fill", "none")
    .attr("stroke-width", 3)
    .attr('points', function(d) {
    
        var posA = [label3.centroid(d)[0]+10,label3.centroid(d)[1]] // line insertion in the slice
        var posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
        var posC = outerArc.centroid(d); // Label position = almost the same as posB
        var midangle = d.startAngle + (d.endAngle - d.startAngle)/2 // we need the angle to see if the X position will be at the extreme right or extreme left
        posC[0] = radius3 *0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        // console.log([posA, posB, posC])
        return [posA, posB, posC]
    })

d3.select(event.currentTarget)
    .append('text')
    .text( function(d) {  return (d.data.count) } )
    .attr('id','label')
    .attr('transform', function(d) {
        
        var pos = outerArc.centroid(d);
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        pos[0] = radius3 * 0.99 * (midangle < Math.PI ? 1 : -1);
        return 'translate(' + pos + ')';
    })
    .style('text-anchor', function(d) {
        var midangle = d.startAngle + (d.endAngle - d.startAngle)
        return (midangle < Math.PI ? 'start' : 'end')
    });
    var Threshold=0.1
d3.select(event.currentTarget)
    .append('text')
    .text( function(d) {  return (d.data.hours) } )
    .attr('id','cate')
    .attr('transform', function(d) {
        var pos = outerArc.centroid(d);
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        pos[0] = radius3 * 0.99 * (midangle < Math.PI ? 1 : -1);
        return 'translate(' + pos[0]+ ','+ (pos[1]-30)+')';
    })
    .style('display', v => v.endAngle - v.startAngle < Threshold ? 'inline' : 'none')
    .style('text-anchor', function(d) {
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return (midangle < Math.PI ? 'start' : 'end')
    
    })

        })
        .on('mouseout', (event, v) => {
            d3.select(event.currentTarget)
                .transition()
                .duration(duration)
                .attr('transform', 'translate(0, 0)');
            d3.select(event.currentTarget).select('path')
                    .transition()
                    .duration(duration)
                    .attr('stroke','white')
                    .attr('stroke-width', 2);
            d3.select(event.currentTarget).select('polyline')
            .remove();
            d3.select(event.currentTarget).select('#label')
            .remove();
            d3.select(event.currentTarget).select('#cate')
            .remove();
    });
    arc3.append("path")
        .attr("d", path3)
        .attr("fill", function(d) { return colorp4(d.data.hours); })
        .attr('stroke-width','2')
        ;
    var textThreshold = 0.1;
    arc3.append("text")
        .attr("transform", function(d) { 
        var rotation = d.endAngle < Math.PI ? 
        (d.startAngle/2 + d.endAngle/2) * 180/Math.PI : 
        (d.startAngle/2  + d.endAngle/2 + Math.PI) * 180/Math.PI ;
        if (label3.centroid(d)[0]<0){return "translate(" + (label3.centroid(d)[0]) +','+ (label3.centroid(d)[1])+ ") rotate(-90) rotate("+rotation+')' ; }
        else if (label3.centroid(d)[0]>=0){
            return "translate(" + (label3.centroid(d)[0]) +','+ (label3.centroid(d)[1])+ ") rotate(-90) rotate("+rotation+')' ; }})
        .style('display', v => v.endAngle - v.startAngle > textThreshold ? 'inline' : 'none')
        .attr("dy", "0.35em")
        .text(function(d) {  return d.data.hours; });
   
  });
 
  