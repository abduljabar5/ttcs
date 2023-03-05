
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
    const confirmdate =document.getElementById('confirmdate')
    const confirmtime =document.getElementById('confirmtime');
    const confirmpickup = document.getElementById('confirmpickup');
    const confirmdropoff = document.getElementById('confirmdropoff');
    const confirmlength =document.getElementById('confirmlength');
    const confirmprice = document.getElementById('confirmprice');
    const confirmpassengers = document.getElementById('confirmpassengers');
    const confirmspecial = document.getElementById('confirmspecial');
        console.log(response);
        console.log(parseFloat(response.rows[0].elements[0].distance.text) * 5);
        mapcontexts.style.display = "block";
        distance.textContent=response.rows[0].elements[0].distance.text
        const test = parseFloat(response.rows[0].elements[0].distance.text)
        if (test < 12){
            price.textContent = "$55"
            confirmprice.textContent = "$55"
            console.log(test);
            console.log(true);  
        }else{
            console.log(false);
        price.textContent = "$" + (parseFloat(response.rows[0].elements[0].distance.text) * 5);
        confirmprice.textContent = "$" + (parseFloat(response.rows[0].elements[0].distance.text) * 5);
        }
        travletime.textContent=response.rows[0].elements[0].duration.text
        confirmdate.textContent =" " + date
        confirmtime.textContent = " " + time
        confirmpickup.textContent = " " + pickUp
        confirmdropoff.textContent = " " + dropOff
        confirmlength.textContent = " " + response.rows[0].elements[0].duration.text
        confirmpassengers.textContent = " " + passengers
        confirmspecial.textContent =  " " + specialRequests
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
  

  