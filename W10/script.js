// add a table to the page 
let $table = $('<table/>');
// add to the body of document
$('body').append($table);

// add a title for the table before table 


// add a thead and tbody on the table 
$('table').append('<thead/>');
$('table').append('<tbody/>');
$('table').addClass('tbl');

//create the heading row
let $headingRow = $('<tr/>').addClass('headingRow');
// add this row to thead
$('thead').append($headingRow);
$headingRow.append($('<td/>').text('FirstName'));
$headingRow.append($('<td/>').text('LastName'));
$headingRow.append($('<td/>').text('Age'));
$headingRow.append($('<td/>').text('Occupation'));
$headingRow.append($('<td/>').text('City'));
$headingRow.append($('<td/>').text('Color'));
$headingRow.append($('<td/>').text('Province'));

// create an input box before table

$('h1').after('<input/>');
$('input').attr('id', 'search');

// dd  a button after table 
$('table').after('<button id="btn"> Students </button>')

// get content of json file 

$.ajax({
    type: "get",
    url: "emp.json",
    error: function(){
        $('.tbl').empty().append('<h1> Content can not be retrieved</h1>');
    },
    success: function(response){
        //loop through response received
        $.each(response, function(index, value){
            // create row
            let $row = $('<tr/>').addClass('row');
            // add td to the row
            $row.append($('<td id="firstN"></td>').text(value.firstName));
            $row.append($('<td></td>').text(value.lastName));
            $row.append($('<td></td>').text(value.age));
            $row.append($('<td id="occu"> </td>').text(value.occupation));
            $row.append($('<td></td>').text(value.color));
            $row.append($('<td></td>').text(value.city));
            $row.append($('<td></td>').text(value.province));

            // add rows to table 
            $('tbody').append($row);
        });
        // Start SEArching by occupation 
        // lets add an id = occu to that cell 

        let $firstNames = $('tbody #firstN');
        let $search = $('#search');
        // create the cache array - element and text
        let cache = [];
        let trr = $('tr');

        firstNames.each(function(){
            cache.push({
                element: this,
                text: this.textContent.trim().toLowerCase()
            });
        });
        console.log(cache);
        // search function
        function searchFirstName(){
            let query = this.value.trim().toLowerCase();
            cache.forEach(function(firstName){
                let index=0;
                if(query){
                    index = firstName.text.indexOf(query);
                }
                firstName.element.style.background = index === -1 ? 'blanchedalmond' : 'darkgreen';
                firstName.element.style.color = index === -1 ? 'black' : 'white';
                if($(search).val() == " "){
                    firstName.element.style.color = 'black';
                    firstName.element.style.background = 'blanchedalmond'
                }

            });

        }
       if('oninput' in $search[0]){
           $search.on('input', searchFirstName);
        }else{
            $search.on('input', searchFirstName);
        }

        // Filer only students 
        // add a button

        

        $('#btn').on('click', function(){
            
           
                $('tbody tr').find(('td:nth-child(3)')).filter(function(){
                
                
                    if($(this).text() === "Student"){
                    
                     $(this).parent().show();
                    }else{
                        $(this).parent().hide();
                       
                    }

                
                })
            
        });

    }
})
