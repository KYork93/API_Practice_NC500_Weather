var johnogroats = new google.maps.LatLng(58.63734, -3.06890);
var durness = new google.maps.LatLng(58.56856, -4.74688);
var clashnessie = new google.maps.LatLng(58.2167, -5.3167);
var achiltibuie = new google.maps.LatLng(58.024811, -5.352271);
var laide = new google.maps.LatLng(57.8667, -5.5333);
var locarron = new google.maps.LatLng(57.4,  -5.5);
var fearnmore = new google.maps.LatLng(57.5667, -5.8167);
var dunrobinCastle = new google.maps.LatLng(57.9817, -3.9456);
var ullapool = new google.maps.LatLng(57.900, -5.166);
var applecross = new google.maps.LatLng(57.416667, -5.816667);
var tongue = new google.maps.LatLng(58.47629, -4.41719);

var waypointDirections = {
    origin: 'Inverness, UK',
    destination: 'Inverness, UK',
    waypoints: [{location: johnogroats}, {location: durness}, {location:clashnessie}, {location: achiltibuie}, {location: laide}, {location: fearnmore}, {location: locarron}],
    travelMode: 'DRIVING'
}

var addMarkers = function(map){

  map.addMarker("This is the northern most point of the British Isle", johnogroats);
  map.addMarker("From here you can travel to Ben Hope, one of the many Munros", tongue);
  map.addMarker("Get a ferry from here to explore the Isle of Sky", ullapool);
  map.addMarker("There is a renowned gastropub here, a must visit", applecross);
  map.addMarker("Dunrobin Castle is a famous attraction here", dunrobinCastle);

}

var initialize = function(){

  var markerDisplay = new google.maps.InfoWindow;
  var ncRoute = new google.maps.DirectionsService();
  var renderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
  var scotlandCentre = {lat: 56.8007, lng: -4.2026};
  var zoom = 7;
  var mainmap = new MapWrapper(scotlandCentre, zoom);

  addMarkers(mainmap);
  renderer.setMap(mainmap.googleMap);
  ncRoute.route(waypointDirections, function(response, status){
    if (status === 'OK') {
      renderer.setDirections(response)
    }
  })
}

window.onload = initialize;
