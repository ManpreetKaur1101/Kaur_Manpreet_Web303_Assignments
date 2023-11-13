// add a table to the page
let $table = $('<table/>');
// add to the body of document
$('body').append($table);

// add thead and tbody to the table
$table.append('<thead/>');
$table.append('<tbody/>');
$table.addClass('tbl');

// create the heading row
let $headingRow = $('<tr/>').addClass('headingRow');
// add this row to thead
$('thead').append($headingRow);
$headingRow.append($('<th/>').text('Firstname'));
$headingRow.append($('<th/>').text('LastName'));
$headingRow.append($('<th/>').text('Age'));
$headingRow.append($('<th/>').text('Occupation'));
$headingRow.append($('<th/>').text('City'));
$headingRow.append($('<th/>').text('Color'));
$headingRow.append($('<th/>').text('Province'));

// create an input box before the table
$('h1').after('<input/>');
$('input').attr('id', 'search');

// add buttons after the table
$table.after('<button id="filterAM">A-M (0)</button>');
$table.after('<button id="filterNZ">N-Z (0)</button>');

// get content of the JSON file
$.ajax({
    type: 'get',
    url: 'emp.json',
    error: function () {
        $('.tbl').empty().append('<h1>Content can not be retrieved</h1>');
    },
    success: function (response) {
        // loop through response received
        $.each(response, function (index, value) {
            // create row
            let $row = $('<tr/>').addClass('row');
            // add td to the row
            $row.append($('<td class="fname"></td>').text(value.firstname));
            $row.append($('<td></td>').text(value.lastName));
            $row.append($('<td></td>').text(value.age));
            $row.append($('<td></td>').text(value.occupation));
            $row.append($('<td></td>').text(value.city));
            $row.append($('<td></td>').text(value.color));
            $row.append($('<td></td>').text(value.province));

            // add rows to table
            $('tbody').append($row);
        });

        // Start searching by firstname
        // let's add an id to that cell

        let $firstnames = $('tbody .fname');
        let $search = $('#search');
        // create the cache array - element and text
        let cache = [];

        $firstnames.each(function () {
            cache.push({
                element: this,
                text: this.textContent.trim().toLowerCase(),
            });
        });
        console.log(cache);
        // search function
        function searchFirstname() {
            let query = $search.val().trim().toLowerCase();
            cache.forEach(function (firstname) {
                let index = 0;
                if (query) {
                    index = firstname.text.indexOf(query);
                }
                firstname.element.style.background = index === -1 ? 'blanchedalmond' : 'darkgreen';
                firstname.element.style.color = index === -1 ? 'black' : 'white';
                if ($search.val() === '') {
                    firstname.element.style.color = 'black';
                    firstname.element.style.background = 'blanchedalmond';
                }
            });
        }

        if ('oninput' in $search[0]) {
            $search.on('input', searchFirstname);
        } else {
            $search.on('input', searchFirstname);
        }
    },
});

// filter functions for buttons
$('#filterAM').on('click', function () {
    filterTable('A', 'M');
});

$('#filterNZ').on('click', function () {
    filterTable('N', 'Z');
});

// filter function
function filterTable(startChar, endChar) {
    let count = 0;

    $('tbody .row').each(function () {
        let lastName = $(this).find('td:nth-child(2)').text(); // assuming last name is in the second column
        let firstChar = lastName.trim().charAt(0).toUpperCase();

        if (firstChar >= startChar && firstChar <= endChar) {
            $(this).show();
            count++;
        } else {
            $(this).hide();
        }
    });

    // update the filter button text with the count
    if (startChar === 'A') {
        $('#filter-AM').text(`A - M (${count})`);
    } else {
        $('#filter-NZ').text(`N - Z (${count})`);
    }
}