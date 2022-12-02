mapboxgl.accessToken = "pk.eyJ1IjoicnVieTA5MDciLCJhIjoiY2xhMW53NWF3MDFvYjNxb2M5bGZhNWJlMiJ9.YXI-xJj_z2oVxGL1JReogA";

// create map
const map2 = new mapboxgl.Map({
  container: 'map2', // container id
  style: 'mapbox://styles/ruby0907/clatl5mvr000215tajwpa1z9t' ,// map style URL from Mapbox Studio
  center: [-98, 38.88], // starting position [lng, lat]
  zoom: 3
});

// wait for map to load before adjusting it
map2.on('load', () => {
  // make a pointer cursor
  map2.getCanvas().style.cursor = 'default';

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
//   const legend2 = document.getElementById('legend');

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
//     legend2.appendChild(item);
//   });
const layers = [
    '0-1k',
    '1k-5k',
    '5k-10k',
    '10k-20k',
    '20k-30k',
    '30k+'
  ];
  const colors = [
    '#fde3e3',
    '#fcbfbf',
    '#f95d5d',
    '#d91212',
    '#a70606',
    '#970707'
  ];

  // create legend
  const legend2 = document.getElementById('legend2');

  layers.forEach((layer, i) => {
    const color = colors[i];
    const item = document.createElement('div');
    const key = document.createElement('span');
    key.className = 'legend-key2';
    key.style.backgroundColor = color;

    const value = document.createElement('span');
    value.innerHTML = `${layer}`;
    item.appendChild(key);
    item.appendChild(value);
    legend2.appendChild(item);
  });

  // change info window on hover
  map2.on('mousemove', (event) => {
    const states2 = map2.queryRenderedFeatures(event.point, {
      // layers: ['review-cnt']
      layers: ['state-data']
    });
    document.getElementById('pd2').innerHTML = states2.length
      ? `<h3>${states2[0].properties.name}</h3><h3><strong><em>${states2[0].properties.earnings+1000}</strong> Yelp's business count in this state</em></h3>`
      : `<p id="hover">Hover over a state!</p>`;
  });
 
 
});
// map2.on('idle',function(){
//     map2.resize()
//     })
// map2.resize();
map2.once('load', () => {
  console.log('map2')
  map2.resize();
});