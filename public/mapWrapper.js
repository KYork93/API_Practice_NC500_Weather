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
        window.setContent('<img id="window-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/John_O%27Groats_from_the_air.jpg/639px-John_O%27Groats_from_the_air.jpg"><p>The furthest point of the British Isles</p> \n <button onclick="wickCheck()">Check Current Local Weather <img id="weather-btn"src="http://www.mikeafford.com/store/store-images/ms02_example_heavy_rain_showers.png"></button>');
      } else if (marker.position === info.tongue){
        window.setContent('<img id="window-img" src="https://upload.wikimedia.org/wikipedia/commons/7/77/The_view_across_Loch_Eriboll_to_Ben_Hope_-_geograph.org.uk_-_234948.jpg"><p>From here you can access Ben Hope</p> \n <button onclick="tongueCheck()">Check Current Local Weather <img id="weather-btn"src="http://www.mikeafford.com/store/store-images/ms02_example_heavy_rain_showers.png"></button>')
      } else if (marker.position === info.ullapool){
        window.setContent('<img id="window-img" src="http://sealochhouse.co.uk/admin/assets/img/45fb6fef56.jpg"><p>You can catch a ferry from here to get to the beautiful Isle of Skye</p> \n <button onclick="ullapoolCheck()">Check Current Local Weather <img id="weather-btn"src="http://www.mikeafford.com/store/store-images/ms02_example_heavy_rain_showers.png"></button>')
      } else if (marker.position === info.applecross){
        window.setContent('<img id="window-img" src="http://www.whatson-north.co.uk/imagelibrary/Client_Images/Client00007/ResizeCache/01988000/01988922%20-%20450x248.jpg"><p>There is a well renowned gastropub here</p> \n <button onclick="appleCheck()">Check Current Local Weather<img id="weather-btn"src="http://www.mikeafford.com/store/store-images/ms02_example_heavy_rain_showers.png"></button>')
      } else if (marker.position === info.dunrobinCastle){
        window.setContent('<img id="window-img" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Dunrobin_Castle_-Sutherland_-Scotland-26May2008_(2).jpg"><p>The castle here is features French Renaissance architecture</p> \n <button onclick="castleCheck()">Check Current Local Weather<img id="weather-btn"src="http://www.mikeafford.com/store/store-images/ms02_example_heavy_rain_showers.png"></button>')
      } else if (marker.position === info.inverness){
        window.setContent('<img id="window-img" src="http://www.flybe.com/cheap-flights/inverness/inverness-overview-16x9.jpg"><p>A growing city in Scotland, the start point and the end point</p> \n <button onclick="invernessCheck()">Check Current Local Weather<img id="weather-btn"src="http://www.mikeafford.com/store/store-images/ms02_example_heavy_rain_showers.png"></button>')
      }

      window.open(this.googleMap, marker);
    })
  }
};
