/*
    Assignment #4
    Name : Manpreet Kaur
    Student id : 0812152
*/



$(function () {
    //check if the location is enabled
    if(!navigator.geolocation){
        $("#locationhere").html("<h2>Please enable your location </h2>")
    }else{
      // get the location
      navigator.geolocation.getCurrentPosition(success, fail);
      // get the coordinates
      function success(pos){
          console.log(pos);
          let lat = pos.coords.latitude;
          let lon = pos.coords.longitude;
          let acc = pos.coords.accuracy;

          // to show these in our div
          $("#locationhere").html("<p> Your Latitude is:" + lat + "</p>");
          $("#locationhere").append("<p> Your Longitude is:" + lon + "</p>");
          $("#locationhere").append("<p> Your Accuracy is:" + acc + "</p>");

          // call the function here to see if you have been or not
            
          const markup = '<a href="https://www.openstreetmap.org/#map=18/${lon}/${lat}">Map is here</a>';

          $("#locationhere").append(markup);
        
            // Display current location
            document.getElementById("locationhere").textContent = 'Current Location: Latitude ${currentLocation.latitude}, Longitude ${currentLocation.longitude}, Accuracy ${currentLocation.accuracy.toFixed(2)} meters';

          // Check if a location value is already stored in localStorage
         const storedLocation = JSON.parse(localStorage.getItem("userLocation"));
         if (storedLocation) {
            // Display the stored location
            document.getElementById("previousLocation").textContent = 'Previous Location: Latitude ${storedLocation.latitude}, Longitude ${storedLocation.longitude} Accuracy ${currentLocation.accuracy.toFixed(2)} meters';
  
            // Display a welcome back message
            document.getElementById("welcomeMessage").textContent = "<h2>Welcome back to the page!</h2>";

            // Display the distance traveled
            document.getElementById("distanceMessage").textContent = 'You traveled ${distance} meters since your last visit.';
          } else {
            // Display a welcome message for first-time visitors
            document.getElementById("welcomeMessage").textContent = "Welcome to the page for the first time!";
          }

          // Store the current location in localStorage, replacing the old value if present
           localStorage.setItem("userLocation", JSON.stringify(currentLocation));
 
          // add these coords to the localStorage
          localStorage.setItem("Longitude", lon);
          localStorage.setItem("Latitude", lat);
      }

      function fail(){
        $("#locationhere").html("<h2>We can not get the location </h2>")
      }
    }

    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});
