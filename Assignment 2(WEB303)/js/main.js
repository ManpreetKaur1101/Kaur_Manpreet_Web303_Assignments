// WEB303 Assignment 2
//Student Name: Manpreet Kaur
//Purpose: To show or hide the content using AJAX

$(document).ready(function() {
    console.log("ready!");
    
  
  function makeHttpRequest(param) {
   
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = processResponse;
    xhr.open("GET", `./${param}.html`);
    xhr.send();
  
    function processResponse() {
      if (xhr.readyState != 4) return; 
      document.getElementById("content").innerHTML = xhr.responseText;
    }
    
  }
  

  $("#prospect").on("click", function() {
    
    $("#content").fadeIn("slow");
    $("#content").load("prospect.html");
   // $(‘#text’).load(‘ajax.html #text’);
    $("#content").hide();
    $("#content").slideToggle(1000);
  });
  $("#convert").on("click", function() {
    $("#content").fadeIn("slow");
    $("#content").load("convert.html");
    $("#content").hide();
    $("#content").slideToggle(1000);
    
  });
  $("#retain").on("click", function() {
    $("#content").fadeIn("slow");
    $("#content").load("retain.html");
    $("#content").hide();
    $("#content").slideToggle(1000);
    
  });

  });




