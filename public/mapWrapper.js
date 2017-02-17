var MapWrapper = function(coords, zoom){
  this.googleMap = new google.maps.Map(document.getElementById('main-map'), {
    center: coords,
    zoom: zoom
  });
}

MapWrapper.prototype = {
  addMarker: function(contentString, coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    this.addInfoWindow(contentString, marker);
  },

  addInfoWindow: function(contentString, marker){
    var window = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    })
    window.setPosition(marker.position);
    google.maps.event.addListener(this.googleMap, 'click', function(){
      window.open(this.googleMap, marker);
    })
  }
};
