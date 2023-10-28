//Name:Manpreet Kaur
//Student-ID:0812152

$('.accord-label').on('click',function(e){
    //prevent the button from the default action- submit
    e.preventDefault();
    // get the button that we are clicking
    let $this =$(this);
    //loop for every panel
$('.accord-panel').each(function(){
    //make sure that showing class is removed - no panel
    $this .removeClass('showing');
    $this.next().slideToggle()
})
// show the panel that is for the button
$this.next().toggleClass();

// hide other panels
$('.accord-panel').not($this.next()).slideUp();
});

//tab panels

//hidden all panels

$('.tab-panel').hide();
$('#tab1').show();
$('.tab-list li').on('click',function(e){
    e.preventDefault();

    //remove the active class
    $('.tab-list-li').removeClass('active');
 // hide the panel

 $('.tab-panel').hide();

 //make the li taht we clicked
 $(this).addClass('active');
 //find the right href and id
 let panel =$(this).find('a').attr('href');
 $(panel).show()
 return false;
});