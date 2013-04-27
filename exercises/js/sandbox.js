//1.1
$("div .module")

//1.2
$("#myListItem").hide()
$("ul#myList li").eq(2)
$("ul#myList li:nth-child(3)")

$("#myListItem").hide() is the best way.

//1.3
$('label[for="q"]')

//1.4
$(":hidden").length

//1.5
$("img[alt]").length

//1.6
$("#fruits tbody tr:odd")


//===========================Exercise 2=================================================

//2.1

$("img").each(function get_image_alt_attribute() {
    console.log( 'alt attribute : ' + $(this).attr('alt'))   
})


//2.2

$('input[name="q"]').parent('form').addClass('eureka')

//2.3

element = $('#myList .current')
element.removeClass('current')
element.next().addClass('current')

//2.4

$('#specials select').parent().next('li').children('input.input_submit')

//2.5

$('#slideshow li:first').addClass('current').siblings().addClass('disabled'


