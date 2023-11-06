$(function () {
   
    $('#open-box').on('click', function(){

        $("#box-container").show()
    });
    
    $('#close').on('click', function(){
    
        $("#box-container").hide()
    });
     $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });  
    });
});