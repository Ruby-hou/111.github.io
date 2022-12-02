
    // define access token
    mapboxgl.accessToken = "pk.eyJ1IjoicnVieTA5MDciLCJhIjoiY2xhMW53NWF3MDFvYjNxb2M5bGZhNWJlMiJ9.YXI-xJj_z2oVxGL1JReogA";

    // create map
    const map1 = new mapboxgl.Map({
      container: 'map1', // container id
      style: 'mapbox://styles/ruby0907/clauts8tm000016pj1mtm83ov' ,// map style URL from Mapbox Studio
      center: [-98, 38.88], // starting position [lng, lat]
      zoom: 3
  });

    // wait for map to load before adjusting it
    map1.on('load', () => {
        // map1.resize();
      // make a pointer cursor
     

      // set map bounds to the continental US
      // map.fitBounds([
      //   [-133.2421875, 16.972741],
      //   [-47.63671875, 52.696361]
      // ]);

      // define layer names
      const layers = [
        '0-10k',
        '10k-50k',
        '50k-100k',
        '100k-200k',
        '200k-500k',
        '500k-1600k'
      ];
      const colors = [
        '#fce5d4',
        '#fcdfc0',
        '#f8bc8c',
        '#f59561',
        '#f1681e',
        '#903d09'
      ];

      // create legend
      const legend = document.getElementById('legend');

      layers.forEach((layer, i) => {
        const color = colors[i];
        const item = document.createElement('div');
        const key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;

        const value = document.createElement('span');
        value.innerHTML = `${layer}`;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
      });

      // change info window on hover
      map1.on('mousemove', (event) => {
        const states = map1.queryRenderedFeatures(event.point, {
          // layers: ['review-cnt']
          // layers: ['polygonreview_cnt-824irw']
          layers: ['review-cnt']

        });
        document.getElementById('pd').innerHTML = states.length
          ? `<h3>${states[0].properties.name}</h3><h3><strong><em>${states[0].properties.earnings+1000}</strong> Yelp's business review count in this state</em></h3>`
          : `<p id="hover">Hover over a state!</p>`;
      });
      map1.getCanvas().style.cursor = 'default';

     
    }
    
    );
    // map1.resize();
    // map.on('idle',function(){
    //     map.resize()
    // //     })
    $("#rc").on('click', function() {map1.resize();});