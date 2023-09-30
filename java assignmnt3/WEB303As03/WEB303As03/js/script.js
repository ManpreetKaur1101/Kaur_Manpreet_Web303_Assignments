//Name: Manpreet Kaur
//Assignment:3
function byGetJson (){
    $.getJSON("team.json", function(data){
    console.log(data);
      $.each(data.members, function(index, members){
        $('div#team').append($("<h2>" + members.name + "</h2>"));
        $('div#team').append($("<h5>" + members.position + "</h5>"));
        $('div#team').append($("<p>" + members.bio + "</p>"));
      });
    });
  };

    $(document).ready(function(){
    //byGetJson();
    byAjax();
    });
        // using the same jquery using $.ajax
        function byAjax(){
       $.ajax({
        type: "GET",
        url: "team.json",
        datatype: "json",
        beforeSend: function(){
          $('div#team').append($("<p>" + "Loading..." + "</p>"));  // Loading... meassage request using ajax
        },
        success: function(result){
            console.log(result);
            $.each(result.members, function(index, team){
                $('p:first-of-type').fadeOut(2000);
                $('div#team').append($("<h2>" + team.name + "</h2>"));
                $('div#team').append($("<h5>" + team.position + "</h5>"));
                $('div#team').append($("<p>" + team.bio + "</p>"));
            });
            setTimeout(function() {
              // Hide the loading message
              $('#loading...').hide();
              
              // Handle the JSON data and update the page content here
            }, 3000);
        },
        error: function(error) {
            console.error('Error:', error);
        }
  });
};