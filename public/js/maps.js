window.nameosa = "jnvjksdnvjkdnvkjlsnlfdnjvds"

function initMap() {
  const bounds = new google.maps.LatLngBounds();
  const markersArray = [];
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.9778, lng: -93.2650 },
    zoom: 10,
  });

  const geocoder = new google.maps.Geocoder();
  const service = new google.maps.DistanceMatrixService();

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
    const directionsRenderer = new google.maps.DirectionsRenderer({ map: map });

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
      connectLocations(origin, destination);
    });

    service.getDistanceMatrix(request).then((response) => {
      const distance = document.getElementById('distance');
      const traveltime = document.getElementById('traveltime');
      const price = document.getElementById('price');
      const mapcontexts = document.getElementById('mapcontexts')
      const confirmlength = document.getElementById('confirmlength');
      const confirmprice = document.getElementById('confirmprice');

      mapcontexts.style.display = "block";
      distance.textContent = response.rows[0].elements[0].distance.text
      const actualDistance = parseFloat(response.rows[0].elements[0].distance.text)

      document.getElementById('form').addEventListener('change', function () {
        const serviceSelect = document.getElementById('form').value;
        if (actualDistance >= 1) {
          let fare;
          switch (serviceSelect) {
            case '1':
              fare = (actualDistance > 10) ? 48 + ((actualDistance - 10) * 3.85) : 48;
              break;
            case '3':
              fare = (actualDistance > 10) ? 55 + ((actualDistance - 10) * 5) : 55;
              break;
            default:
              return;
          }
          fare = Math.floor(fare * 100) / 100;
          price.textContent = "$ " + fare;
          confirmprice.textContent = "$ " + fare;
        } else {
          alert("Distance too short");
          window.location.reload();
        }
      });

      traveltime.textContent = response.rows[0].elements[0].duration.text
      confirmlength.textContent = " " + response.rows[0].elements[0].duration.text

      const originList = response.originAddresses;
      const destinationList = response.destinationAddresses;

      deleteMarkers(markersArray);

      for (let i = 0; i < originList.length; i++) {
        const results = response.rows[i].elements;

        geocoder.geocode({ address: originList[i] });
        for (let j = 0; j < results.length; j++) {
          geocoder.geocode({ address: destinationList[j] });
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

var inputs = document.querySelectorAll('.autocomplete');
inputs.forEach(function (input) {
  initializeAutocomplete(input);
  input.addEventListener('change', function () {
    initMap();
  });
});
