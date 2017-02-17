var MapWrapper = function(coords, zoom){
  this.googleMap = new google.maps.Map(document.getElementById('main-map'), {
    center: coords,
    zoom: zoom
  });
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    this.addInfoWindow(marker);
  },

  addInfoWindow: function(marker){
    var window = new google.maps.InfoWindow({
      content: " ",
      maxWidth: 200
    })
    window.setPosition(marker.position);
    google.maps.event.addListener(marker, 'click', function(){
      if(marker.position === info.johnogroats){
        window.setContent('<p>The furthest point of the British Isles</p> \n <button id="john-weather">Check Weather</button>');
      } else if (marker.position === info.tongue){
        window.setContent('<p>From here you can access Ben Hope</p> \n <button id="tongue-weather">Check Weather</button>')
      } else if (marker.position === info.ullapool){
        window.setContent('<p>You can catch a ferry from here to get to the beautiful Isle of Skye</p> \n <button id="ullapool-weather">Check Weather</button>')
      } else if (marker.position === info.applecross){
        window.setContent('<p>There is a well renowned gastropub here</p> \n <button id="apple-weather">Check Weather</button>')
      } else if (marker.position === info.dunrobinCastle){
        window.setContent('<p>The castle here is features French Renaissance architecture</p> \n <button>Check Weather </button>')
      }


      window.open(this.googleMap, marker);
    })
  }
};
