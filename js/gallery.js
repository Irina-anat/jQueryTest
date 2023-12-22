$(document).ready(function () {
    $('.small a').click(function (e) {
        if ($('.big img').attr('src') !== $(this).attr('href')) {
            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000)
        }
        e.preventDefault()
    });
    $('.button').click(function () {
        $('.gallery').slideToggle(500);
        if ($('.button').text() == 'hide') {
            $('.button').text('show')
        } else {
            $('.button').text('hide')
        }
    });
    $('.small a img').click(function () {
        $('.small a img').fadeTo(500, 1).css({
         'border':'none'
     })  
        $(this).fadeTo(500, 0.6).css({
        'border':'2px solid green'
    })
})
});