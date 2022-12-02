mapboxgl.accessToken = "pk.eyJ1IjoicnVieTA5MDciLCJhIjoiY2xhMW53NWF3MDFvYjNxb2M5bGZhNWJlMiJ9.YXI-xJj_z2oVxGL1JReogA";

// create map
const map3 = new mapboxgl.Map({
  container: 'map3', // container id
  style: 'mapbox://styles/ruby0907/clb5rxrek000c14psbfrj5x8h' ,// map style URL from Mapbox Studio
  center: [-98, 38.88], // starting position [lng, lat]
  zoom: 3
});

// wait for map to load before adjusting it
map3.on('load', () => {
  // make a pointer cursor
  map3.getCanvas().style.cursor = 'default';

  // set map bounds to the continental US
  // map.fitBounds([
  //   [-133.2421875, 16.972741],
  //   [-47.63671875, 52.696361]
  // ]);

  // define layer names
//   const layers2 = [
//     '0-10',
//     '10-20',
//     '20-50',
//     '50-100',
//     '100-200',
//     '200-500',
//     '500-1000',
//     '1000+'
//   ];
//   const colors2 = [
//     '#FFEDA0',
//     '#FED976',
//     '#FEB24C',
//     '#FD8D3C',
//     '#FC4E2A',
//     '#E31A1C',
//     '#BD0026',
//     '#800026'
//   ];

//   // create legend
//   const legend3 = document.getElementById('legend');

//   layers2.forEach((layer2, i) => {
//     const color2 = colors2[i];
//     const item = document.createElement('div');
//     const key2 = document.createElement('span');
//     key2.className = 'legend-key';
//     key2.style.backgroundColor = color2;

//     const value2 = document.createElement('span');
//     value2.innerHTML = `${layer2}`;
//     item.appendChild(key2);
//     item.appendChild(value2);
//     legend3.appendChild(item);
//   });
const layers = [
    '1',
    '2',
    '3',
    '4',
    '5'
  ];
  const colors = [
    '#8c95e8',
    '#969cf8',
    '#8192f3',
    '#2b34e3',
    '#09098b'
  ];

  // create legend
  const legend = document.getElementById('legend3');

  layers.forEach((layer, i) => {
    const color = colors[i];
    const item = document.createElement('div');
    const key = document.createElement('span');
    key.className = 'legend-key3';
    key.style.backgroundColor = color;

    const value = document.createElement('span');
    value.innerHTML = `${layer}`;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
  });

  // change info window on hover
  map3.on('mousemove', (event) => {
    const states3 = map3.queryRenderedFeatures(event.point, {
      // layers: ['review-cnt']
      layers: ['avg-stars-7o0v2a']
    });
    document.getElementById('pd3').innerHTML = states3.length
      ? `<h3>${states3[0].properties.name}</h3><h3><strong><em>${states3[0].properties.earnings}</strong> Yelp's business average rating star in this state</em></h3>`
      : `<p id="hover">Hover over a state!</p>`;
  });
  
 
});
// map3.on('idle',function(){
//     map3.resize()
//     })
$("#rs").on('click', function() {map3.resize();});
// map3.resize();
// document.addEventListener("DOMContentLoaded", () => map3.resize());