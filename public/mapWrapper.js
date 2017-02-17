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
        window.setContent('<p>The furthest point of the British Isles</p> \n <button onclick="wickCheck()" id="john-weather">Check Weather</button>');
      } else if (marker.position === info.tongue){
        window.setContent('<p>From here you can access Ben Hope</p> \n <button onclick="tongueCheck()" id="tongue-weather">Check Weather</button>')
      } else if (marker.position === info.ullapool){
        window.setContent('<img src="http://sealochhouse.co.uk/admin/assets/img/45fb6fef56.jpg"><p>You can catch a ferry from here to get to the beautiful Isle of Skye</p> \n <button onclick="ullapoolCheck()" id="ullapool-weather">Check Weather</button>')
      } else if (marker.position === info.applecross){
        window.setContent('<img src="http://www.whatson-north.co.uk/imagelibrary/Client_Images/Client00007/ResizeCache/01988000/01988922%20-%20450x248.jpg"><p>There is a well renowned gastropub here</p> \n <button onclick="appleCheck()" id="apple-weather">Check Weather</button>')
      } else if (marker.position === info.dunrobinCastle){
        window.setContent('<img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Dunrobin_Castle_-Sutherland_-Scotland-26May2008_(2).jpg"><p>The castle here is features French Renaissance architecture</p> \n <button onclick="castleCheck()" id="castle-weather">Check Weather</button>')
      }


      window.open(this.googleMap, marker);
    })
  }
};
