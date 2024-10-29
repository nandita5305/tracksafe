
const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
document.addEventListener("DOMContentLoaded", function() {
  let map;

  document.getElementById('getLocationBtn').addEventListener('click', function() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPositionOnMap, showError);
      } else {
          alert("Geolocation is not supported by this browser.");
      }
  });

  function initMap(lat, lng) {
      const userLocation = { lat: lat, lng: lng };
      map = new google.maps.Map(document.getElementById("map"), {
          center: userLocation,
          zoom: 15
      });
      new google.maps.Marker({
          position: userLocation,
          map: map,
          title: "You are here!"
      });
  }

  function showPositionOnMap(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      initMap(latitude, longitude);
  }

  function showError(error) {
      switch (error.code) {
          case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.");
              break;
          case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.");
              break;
          case error.TIMEOUT:
              alert("The request to get user location timed out.");
              break;
          case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.");
              break;
      }
  }
});



// Show/hide back-to-top button
window.onscroll = function() {
    const button = document.getElementById('back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Scroll to top functionality
document.getElementById('back-to-top').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
