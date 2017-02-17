// var info = require('../db/infoBase.js');

var info = new InfoBase();

// console.log(infoBase);

var waypointDirections = {
    origin: 'Inverness, UK',
    destination: 'Inverness, UK',
    waypoints: [{location: info.johnogroats}, {location: info.durness}, {location: info.clashnessie}, {location: info.achiltibuie}, {location: info.laide}, {location: info.fearnmore}, {location: info.locarron}],
    travelMode: 'DRIVING'
}

var addMarkers = function(map){
  map.addMarker("This is the northern most point of the British Isle", info.johnogroats);
  map.addMarker("From here you can travel to Ben Hope, one of the many Munros", info.tongue);
  map.addMarker("Get a ferry from here to explore the Isle of Sky", info.ullapool);
  map.addMarker("There is a renowned gastropub here, a must visit", info.applecross);
  map.addMarker("Dunrobin Castle is a famous attraction here", info.dunrobinCastle);

}

var initialize = function(){
  // var info = new InfoBase;
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
