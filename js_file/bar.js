
var margin = { top: 100, left: 105, bottom: 200, right: 50 },
width = 950 - margin.left - margin.right,
height = 750 - margin.top - margin.bottom;

var svgbar = d3.select('#chart2').append('svg')
.attr('width', width + margin.left + margin.right)
.attr('height', height + margin.top + margin.bottom)
.append('g')
.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

var all, bottomV, topV;
d3.json('./data/yelp_bar.json')
.then(data => {
data=data['all']
all = data;
console.log(data);


//initialize data variables

topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
//set initial state
filter('#all');
sort('#alphabetic');

// toggleFilter('#all');
// toggleSort('#alphabetic');

draw();
});

///////////////////////////////////////////////////////////////
// Controls
///////////////////////////////////////////////////////////////

var current, sortMode, filterMode,xlabel;

d3.select("#select_level").on("change", function() {
   v = d3.select(this).property('value');
 
  if (v == 'all_level') {
    d3.json('./data/yelp_bar.json').then(data => {
            data=data['all']
            all = data;
            
            //initialize data variables

            topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
            bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
            //set initial state
            filter('#all');
            sort('#alphabetic');

            // toggleFilter('#all');
            // toggleSort('#alphabetic');

            redraw();
});
  } else if (v=='CA'){
    d3.json('./data/yelp_bar.json').then(data => {
      data=data['CA']
      all = data;
      
      //initialize data variables

      topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
      bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
      //set initial state
      filter('#all');
      sort('#alphabetic');

      // toggleFilter('#all');
      // toggleSort('#alphabetic');

      redraw();

    });
  }else if (v=='AZ'){
    d3.json('./data/yelp_bar.json').then(data => {
      data=data['AZ']
      all = data;
      
      //initialize data variables

      topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
      bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
      //set initial state
      filter('#all');
      sort('#alphabetic');

      // toggleFilter('#all');
      // toggleSort('#alphabetic');

      redraw();

    });}
    else if (v=='CO'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['CO']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='DE'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['DE']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='FL'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['FL']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='HI'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['HI']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='ID'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['ID']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='IL'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['IL']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='IN'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['IN']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='LA'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['LA']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='MA'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['MA']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='MI'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['MI']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='MO'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['MO']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='MT'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['MT']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='NJ'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['NJ']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='NV'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['NV']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='PA'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['PA']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='SD'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['SD']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='TN'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['TN']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='TX'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['TX']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='UT'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['UT']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='VT'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['VT']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    else if (v=='WA'){
      d3.json('./data/yelp_bar.json').then(data => {
        data=data['WA']
        all = data;
        
        //initialize data variables
  
        topV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(0, 5);  
        bottomV = data.sort((a, b) => d3.descending(a.count, b.count)).slice(data.length - 5);  
        //set initial state
        filter('#all');
        sort('#alphabetic');
  
        // toggleFilter('#all');
        // toggleSort('#alphabetic');
  
        redraw();
  
      });}
    


});
//sort event handlers

d3.select('#alphabetic')
.on('click', () => {
  
  sort('#alphabetic');
  transition();
  // toggleSort('#alphabetic');
  
});

d3.select('#asc')
.on('click', () => {
  //🚧 implement asc
  sort('#asc');
  transition();
  // toggleSort('#asc');
  
});

d3.select('#desc')
.on('click', () => {


  sort('#desc');
  transition();
  // toggleSort('#desc');
  
});

//filter event handlers





d3.select('#all')
.on('click', () => {
  filter('#all');
  
  sort(sortMode);
  
  // toggleSort(sortMode);
  // toggleFilter('#all');

  redraw();
});


d3.select('#top')
.on('click', () => {
  filter('#top');
  
  sort(sortMode);
  
  // toggleSort(sortMode);
  // toggleFilter('#top');
 
  redraw();
});

d3.select('#bottom')
.on('click', () => {
  filter('#bottom');
  sort(sortMode);
  
  // toggleSort(sortMode);
  // toggleFilter('#bottom');

  redraw();
});

d3.select('input')
.on('change', () => {

  sort(sortMode);
  // toggleSort(sortMode);
  
  redraw();
});


function filter(mode) {
if (mode === '#all') {
  current = JSON.parse(JSON.stringify(all));
} else if (mode === '#bottom') {
  current = JSON.parse(JSON.stringify(bottomV));
} else if (mode === '#top') {
  current = JSON.parse(JSON.stringify(topV));
}


// filterMode = mode;
}

function sort(mode) {

if (mode === '#alphabetic') {
  current.sort((a, b) => d3.ascending(a.category, b.category));
  //🚧 update x axis label
  xlabel='Sorted from alphabetic order by category';
  selection = d3.select('.label')
  selection.call(d =>d .attr('x', width / 2)
  .attr('y', height + 150)
  .attr('class', 'label')
  .text(xlabel));
} else if (mode === '#asc') {
  current.sort((a, b) => d3.ascending(a.count, b.count));
  //🚧 update x axis label
  xlabel='Sorted from ascending order by number of business';
  selection = d3.select('.label');
  selection.call(d =>d .attr('x', width / 2)
  .attr('y', height + 150)
  .attr('class', 'label')
  .text(xlabel) );
} else if (mode === '#desc') {
  current.sort((a, b) => d3.descending(a.count, b.count));
  //🚧 update x axis label
  xlabel='Sorted from descending order by number of business';
  selection = d3.select('.label');
  selection.call(d =>d .attr('x', width / 2)
  .attr('y', height + 150)
  .attr('class', 'label')
  .text(xlabel) );
}

x.domain(current.map(d => d.category));
sortMode = mode;
}

///////////////////////////////////////////////////////////////
// draw the chart
///////////////////////////////////////////////////////////////

var x = d3.scaleBand();
var y = d3.scaleLinear();
var xAxis;
var yAxis;
var delay = function (d, i) {
return i * 50;
};

function redraw() {

//update scale
x.domain(current.map(d => d.category));
y.domain([0, d3.max(current, d => d.count)]).range([height, 0]);

var transition = svgbar.transition() .duration(750);
transition.select('#y-axis').call(yAxis);

transition  //transition the axis
.select('#x-axis')
.call(xAxis)
.selectAll("text")
.style("text-anchor", "end")
.attr("dx", "-.8em")
  .attr("dy", ".15em")
.attr("transform", "rotate(-65)");
////////////////////////////////
// DATA JOIN FOR BARS.
var bars = svgbar.selectAll('.bar')
  .data(current, d => d.category);

// UPDATE.
bars.transition()
  .duration(750)
  .delay(delay)
  .attr('x', d => x(d.category))
  .attr('y',d=>y(d.count))
  .attr('width', x.bandwidth())
  .attr('height', d => height - y(d.count));

// ENTER.
bars.enter()
  .append('rect')
  .attr('x', d => x(d.category))
  .attr('y', d => y(0))
  .attr('width', x.bandwidth())
  .transition()
  .duration(750)
  .attr('class', 'bar')
  .attr('x', d => x(d.category))
  .attr('y', d => y(d.count))
  .attr('width', x.bandwidth())
  .attr('height', d => height - y(d.count));

// EXIT.
bars.exit()
  .transition()
  .duration(750)
  .style('opacity', 0)
  .remove();
}

function transition() {
var transition = svgbar.transition()
  .duration(750);

transition.selectAll('.bar')
  .delay(delay)
  .attr('x', d => x(d.category));
  transition  //transition the axis
  .select('#x-axis')
  .call(xAxis)
  .selectAll("text")
  .style("text-anchor", "end")
  .attr("dx", "-.8em")
    .attr("dy", ".15em")
  .attr("transform", "rotate(-65)");
}

function draw() {

x.domain(current.map(d => d.category))
  .range([0, width])
  .paddingInner(0.2);

y.domain([0, d3.max(current, d => d.count)])
  .range([height, 0]);

  svgbar.selectAll('rect')
  .data(current, d => d.category)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', d => x(d.category))
  .attr('y', d => y(d.count))
  .attr('width', x.bandwidth())
  .attr('height', d => height - y(d.count));


xAxis = d3.axisBottom().scale(x);
svgbar.append('g')
  .attr('id', 'x-axis')
  .attr('class', 'axis')
  .attr('transform', 'translate(0,' + height + ')')
  .call(xAxis)
  .selectAll("text")
  .style("text-anchor", "end")
  .attr("dx", "-.8em")
    .attr("dy", ".15em")
  .attr("transform", "rotate(-65)");
  ;

  svgbar.append('text')
  .attr('x', width / 2)
  .attr('y', height + 150)
  .attr('class', 'label')
  .text(xlabel);  

yAxis = d3.axisLeft()
  .scale(y)
  .ticks(5, 'd');

  svgbar.append('g')
  .attr('id','y-axis')
  .attr('class', 'axis')
  .call(yAxis);

  svgbar.append('text')
  .attr('x', - height / 2)
  .attr('y', - margin.left * 0.7)
  .attr('transform', 'rotate(-90)')
  .attr('class', 'label')
  .text('number of business')
  ;
}
