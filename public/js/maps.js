
// function initializeAutocomplete(input) {
//     var options = {
//       types: ['address'],
//       componentRestrictions: {country: 'us'}
//     };
//     var autocomplete = new google.maps.places.Autocomplete(input, options);
//   }
  
//   // Example usage:
//   var inputs = document.querySelectorAll('.autocomplete');
//   inputs.forEach(function(input) {
//     initializeAutocomplete(input);
//   });
  
function initMap() {
    const bounds = new google.maps.LatLngBounds();
    const markersArray = [];
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 44.9778, lng: -93.2650 },
      zoom: 10,
    });
    // initialize services
    const geocoder = new google.maps.Geocoder();
    const service = new google.maps.DistanceMatrixService();
    // build request
    setTimeout(() => {
    const origin = document.getElementById("pick-up").value;
    const destination = document.getElementById("drop-off").value;
    const request = {
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false,
    };

    // put request on page
    // document.getElementById("request").innerText = JSON.stringify(
    //   request,
    //   null,
    //   2
    // );
    // get distance matrix response
    console.log(request);
    service.getDistanceMatrix(request).then((response) => {
      // put response
      const distance = document.getElementById('distance');
      const travletime = document.getElementById('traveltime');
      const price = document.getElementById('price');
      const mapcontexts = document.getElementById('mapcontexts')
        console.log(response);
        console.log(parseInt(response.rows[0].elements[0].distance.text) * 6);
        mapcontexts.style.display = "block";
        distance.textContent=response.rows[0].elements[0].distance.text
        price.textContent = "$" + (parseInt(response.rows[0].elements[0].distance.text) * 6);
        travletime.textContent=response.rows[0].elements[0].duration.text
        //   document.getElementById("response").innerText = JSON.stringify(
        //     response,
        //     null,
        //     2
        //   );
  
        // show on map
        
        const originList = response.originAddresses;
        const destinationList = response.destinationAddresses;
  
        deleteMarkers(markersArray);
  
        const showGeocodedAddressOnMap = (asDestination) => {
          const handler = ({ results }) => {
            map.fitBounds(bounds.extend(results[0].geometry.location));
            markersArray.push(
              new google.maps.Marker({
                map,
                position: results[0].geometry.location,
                label: asDestination ? "D" : "O",
              })
            );
          };
          return handler;
        };
  
        for (let i = 0; i < originList.length; i++) {
          const results = response.rows[i].elements;
  
          geocoder
            .geocode({ address: originList[i] })
            .then(showGeocodedAddressOnMap(false));
  
          for (let j = 0; j < results.length; j++) {
            geocoder
              .geocode({ address: destinationList[j] })
              .then(showGeocodedAddressOnMap(true));
          }
        }
      }, 2000);
    });
  }
  
  function deleteMarkers(markersArray) {
    for (let i = 0; i < markersArray.length; i++) {
      markersArray[i].setMap(null);
    }
  
    markersArray = [];
  }
  
  
  function initializeAutocomplete(input) {
    var options = {
      types: ['address'],
      componentRestrictions: {country: 'us'}
    };
    var autocomplete = new google.maps.places.Autocomplete(input, options);
  }
  
  // Example usage:
  var inputs = document.querySelectorAll('.autocomplete');
  inputs.forEach(function(input) {
    initializeAutocomplete(input);
    input.addEventListener('change', function() {
      initMap();
    });
  });
  

  