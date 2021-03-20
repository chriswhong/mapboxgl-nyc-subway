// set my mapboxgl access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';

// initialize the mapboxGL map in the div with id 'mapContainer'
const map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-73.882646,40.810616],
  zoom: 9.3
});

// wait for the initial mapbox style to load before loading our own data
map.on('style.load', () => {
  // fitbounds to NYC
  map.fitBounds([
    [-74.270056,40.494061],
    [-73.663062,40.957187]
  ])

  // add geojson sources for subway routes and stops
  map.addSource('nyc-subway-routes', {
    type: 'geojson',
    data: 'data/nyc-subway-routes.geojson'
  });

  map.addSource('nyc-subway-stops', {
    type: 'geojson',
    data: 'data/nyc-subway-stops.geojson'
  });

  // add layers by iterating over the styles in the array defined in subway-layer-styles.js
  subwayLayerStyles.forEach((style) => {
    map.addLayer(style)
  })
})
