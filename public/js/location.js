document.getElementById("locationButton").addEventListener("click", function() {
    loading();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  });
  
  function showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    reverseGeocode(lat, lng);
  }
  
  function reverseGeocode(lat, lng) {
    const geocoder = new google.maps.Geocoder();
    const latLng = new google.maps.LatLng(lat, lng);
  
    geocoder.geocode({ 'location': latLng }, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          const address = results[0].formatted_address;
          document.getElementById("pick-up").value = address;
          show();
        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  }
  
  function showError(error) {
    // Handle errors as shown in the previous answer
  }
  function loading(){
    const locationButton = document.getElementById('locationButton');
    const loader = document.getElementById('loader');
    locationButton.style.display = 'none';
    loader.style.display = 'block'
  }
  function show(){
    const locationButton = document.getElementById('locationButton');
    const loader = document.getElementById('loader');
    locationButton.style.display = 'block';
    loader.style.display = 'none'
  }