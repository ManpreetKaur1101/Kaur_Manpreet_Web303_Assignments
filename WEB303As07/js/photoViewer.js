$('#photo-thumbnails img ').on({
    mouseover: function(){
        $(this).css({
            'cursor': 'pointer',
            'border-color': 'Blue'
        });

    },
    mouseout: function(){
        $(this).css({
            'cursor': 'default',
            'border-color': 'grey'
        });

    },
    click: function(){
        let imgURL = $(this).attr('src');
        $('#main-img').fadeOut(100, function(){
            $(this).attr('src', imgURL)
        }).fadeIn(100);
    }            
});