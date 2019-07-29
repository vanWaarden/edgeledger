// To include a Map API KEY
// First type in Google: google console. Choose Google Cloud Console. Have to be logged in and have a project. 
// then in the menu on the left click on API'S and services
// then choose: enable API's and services
// then click Maps Javascript API
// then click on credentials (inloggegevens) and choose from the Create credentials drop down menu the option API key. This generates a key.
// Copy this API key in a comment in your index.html file. 
// then search in Google for google map docs and choose option overview | Maps Javascript API | Developers
// you see some lines of code. Copy the script tag  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"async defer></script> below in your html file right above </body>. 
// past your API key on the place where it says: YOUR_API_KEY. 
// copy the function right above the api script tag in same code section on Google Maps Platform overview into your index.js file like below: in the example they use id="map" if you use a class "map" make sure to change the target of the querySelector to .map instead of #map. Like we have done below:

// Initialize and add the map
function initMap() {
  // Your location (this one is centered in Boston). If you want another location just google: get latitude and logtitude from adress or right away: latlong.net
  const loc = { lat: 42.361145, lng: -71.057083 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc // center position is going to be in the location
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map }); // position should be the const loc location and the map should show the const map map.
}

// Sticky menu background
window.addEventListener('scroll', function() { // adding an event to the window object (which is the whole browser) and were listening for a scroll:
  if (window.scrollY > 150) { // if we scroll down more than 150/ the scroll Y position is > 150 =>
    document.querySelector('#navbar').style.opacity = 0.9; // we're gonna select the #navbar and set the opacity to 0.9
  } else { // if were less than 150 (so its up at the top) =>
    document.querySelector('#navbar').style.opacity = 1; // the opacity will be just 1 (not transparent)
  }
});

// Smooth Scrolling
// '#navbar a' => targetting any link inside the navbar, .on('click' (which is an event) => if any link is clicked => the function(event) will run.
$('#navbar a').on('click', function(event) {
  if (this.hash !== '') { // this function checks for the #navbar (so the id's) (and the .btn class before removting this because prevents the default behaviour of the button and since we have that .btn class on our form button it wont submit correctly so we want the smooth scrolling only to be on the navbar   (so <a href="#what" class="btn">Read More</a>))
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate( // then we call the animate on the html and body
      {
        scrollTop: $(hash).offset().top - 100 // and scroll from the top to that # (so that section). - 100 is necessary to see the title of this section. 
      },
      800 // 800ms is the speed in which it will scroll from the top (where the link is clicked on the navbar) to the right section. 
    );
  }
});