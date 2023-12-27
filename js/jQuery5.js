// Було
// jQuery(document).ready(function () {
//     $('h1').css({'color': 'red'})
// })

jQuery(function () {
    $('h1').css({ 'color': 'red' })   
    // для динамічного контенту
    $('button').on('click', function(){
        alert('Button')
    })

    $('input[name="name"]').change(function () {
        var value = $(this).val()//отрим знач з input
        $('input[name="submit"]').val(value)// передаю знач для назви кнопки
    });

    $("form").hide(2000).delay(2000).show(2000);

    $('#box').animate({ 'width': '50px' }, 2000)

    $('#box-2').fadeOut(2000).delay(1000).fadeIn(2000)

    $('#box-3').hide(3000).delay(2000).show(3000)

    //var text = $('.text').text()
   // console.log(text)
    $('.text').text('New text')
    
    var newHTML = '<li>New First</li><li>Second</li><li>Third</li><li>Fourth</li>'

    console.log($('ul').html(newHTML))

    $('ul').append('<li>Last</li>')

    $('ul').prepend('<li>New</li>')

    // $('ul').empty() - очист ul і залиш li
    // $('ul').remove() - видалить ul
    $('ul').after('<p>After</p>')
    
    // $('ul li').after('<p>After li</p>')
    
    $('form').wrap('<div class="red"><div>')



})