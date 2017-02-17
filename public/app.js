
var info = new InfoBase();

var waypointDirections = {
    origin: 'Inverness, UK',
    destination: 'Inverness, UK',
    waypoints: [{location: info.johnogroats}, {location: info.durness}, {location: info.clashnessie}, {location: info.achiltibuie}, {location: info.laide}, {location: info.fearnmore}, {location: info.locarron}],
    travelMode: 'DRIVING'
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var townCheck = function(){
  url = "http://api.openweathermap.org/data/2.5/weather?q=Ullapool&appid=f11f81a722d1ac771c8388873825eb11";

  makeRequest(url, displayWeather);
}

var displayWeather = function(){
  if(this.status != 200) return;
  var dataObject = JSON.parse(this.responseText);

  var div = document.querySelector('#weather-info')
  var p = document.createElement('p');
  console.log(dataObject);
  dataObject.forEach(function(property){
    p.appendChild(property.weather.main);
  })
  div.appendChild(p);
}

var addMarkers = function(map){
  map.addMarker(info.johnogroats);
  map.addMarker(info.tongue);
  map.addMarker(info.ullapool);
  map.addMarker(info.applecross);
  map.addMarker(info.dunrobinCastle);
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
  displayWeather;
}

window.onload = initialize;
