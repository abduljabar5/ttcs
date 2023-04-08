
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

window.nameosa="jnvjksdnvjkdnvkjlsnlfdnjvds"
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
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      map: map,
    });

    // Add connectLocations function
    function connectLocations(origin, destination) {
      const request = {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        }
      });
    }
    service.getDistanceMatrix(request).then((response) => {
      // ...

      // Call connectLocations function after obtaining the response
      connectLocations(origin, destination);

      // ...
    });
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
      const firstName = document.querySelector('#first-name').value.trim();
      const lastName = document.querySelector('#last-name').value.trim();
      const useremail = document.querySelector('#email').value.trim();
      const phone = document.querySelector('#phone').value.trim();
      const time = document.querySelector('#appointment-time').value.trim();
      const date = document.querySelector('#appointment-date').value.trim();
      const pickUp = document.querySelector('#pick-up').value.trim();
      const dropOff = document.querySelector('#drop-off').value.trim();
      const passengers = document.querySelector('#passengers').value.trim();
      const specialRequests = document.querySelector('#special-requests').value.trim();
      const confirmdate = document.getElementById('confirmdate')
      const confirmtime = document.getElementById('confirmtime');
      const confirmpickup = document.getElementById('confirmpickup');
      const confirmdropoff = document.getElementById('confirmdropoff');
      const confirmlength = document.getElementById('confirmlength');
      const confirmprice = document.getElementById('confirmprice');
      const confirmpassengers = document.getElementById('confirmpassengers');
      const confirmspecial = document.getElementById('confirmspecial');
      //  moooooooooooomooooooooooon//
      console.log(response);
      console.log(parseFloat(response.rows[0].elements[0].distance.text) * 5);
      mapcontexts.style.display = "block";
      distance.textContent = response.rows[0].elements[0].distance.text
      const actualDistance = parseFloat(response.rows[0].elements[0].distance.text)
      // service price change starts here??//
      ////////////////////////////////////////
      //////////////////////////////////////

      // Get the select element by its id
      document.getElementById('form').addEventListener('change', function () {
        function isFeetOrMiles(value) {
          // Convert the input value to a string to check for the unit
          const valueString = String(value).toLowerCase();

          // Check if the value contains 'ft' or 'mi'
          if (valueString.includes('mi')) {
            return true;
          } else {
            return false;
          }
        }
        // Add a change event listener to the select element

        const serviceSelect = document.getElementById('form').value;
        if (isFeetOrMiles(response.rows[0].elements[0].distance.text)) {
          console.log(response.rows[0].elements[0].distance.text);
          if (serviceSelect === '1') {
            console.log("taxi fair");
            let fair = 48;
            if (actualDistance < 10) {
              price.textContent = "$ " + fair
              confirmprice.textContent = "$ " + fair
              console.log(actualDistance);
            } else {
              fair += ((actualDistance - 10) * 3.85);
              console.log(fair);
              function roundDownToTwo(num) {
                return Math.floor(num * 100) / 100;
              }
              let roundedFair = roundDownToTwo(fair)
              console.log(roundedFair);
              price.textContent = "$ " + roundedFair.toString();
              confirmprice.textContent = "$ " + roundedFair.toString();
            }

          } else if (serviceSelect === '3') {
            console.log("limo fair");
            let fair = 55;
            if (actualDistance < 10) {
              price.textContent = "$ " + fair
              confirmprice.textContent = "$ " + fair
              console.log(actualDistance);
            } else {
              fair += ((actualDistance - 10) * 5);
              console.log(fair);
              price.textContent = "$ " + fair.toString();
              window.sharedData = "$ ";
              confirmprice.textContent = "$ " + fair.toString();
            }
          } else {
            console.log(serviceSelect);

          }
        } else {
          console.log(response.rows[0].elements[0].distance.text);

          alert("Distance too short");
          window.location.reload();
        }
      })
      travletime.textContent = response.rows[0].elements[0].duration.text
      confirmlength.textContent = " " + response.rows[0].elements[0].duration.text
      // show on map

      const originList = response.originAddresses;
      const destinationList = response.destinationAddresses;

      deleteMarkers(markersArray);

      // const showGeocodedAddressOnMap = (asDestination) => {
      //   const handler = ({ results }) => {
      //     map.fitBounds(bounds.extend(results[0].geometry.location));
      //     markersArray.push(
      //       new google.maps.Marker({
      //         map,
      //         position: results[0].geometry.location,
      //         label: asDestination ? "D" : "O",
      //       })
      //     );
      //   };
      //   // return handler;
      // };

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
    componentRestrictions: { country: 'us' }
  };
  var autocomplete = new google.maps.places.Autocomplete(input, options);
}

// Example usage:
var inputs = document.querySelectorAll('.autocomplete');
inputs.forEach(function (input) {
  initializeAutocomplete(input);
  input.addEventListener('change', function () {
    initMap();
  });
});


