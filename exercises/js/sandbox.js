//2.1.1
$("div.module")

//2.1.2
$("#myListItem").hide()
$("ul#myList li").eq(2)
$("ul#myList li:nth-child(3)")

$("#myListItem").hide() is the best way.

//2.1.3
$('label[for="q"]')

//2.1.4
$("body :hidden").length

//2.1.5
$("img[alt]").length

//2.1.6
$("#fruits tbody tr:odd")


//===========================Exercise 2=================================================

//2.2.1

$("img").each(function() {
    console.log( 'alt attribute : ' + $(this).attr('alt'))   
})


//2.2.2

$('input[name="q"]').parent('form').addClass('eureka')

//2.2.3

$('#myList .current').removeClass('current').next().addClass('current')

//2.2.4

$('#specials select').parent().siblings(".buttons").children('input.input_submit')

//2.2.5

$('#slideshow li:first').addClass('current').siblings().addClass('disabled')


//2.3.1

var myItems = [], $myList = $('#myList');
for (var i=0; i<5; i++) {
myItems.push('<li>newly added item ' + i + '</li>');
}
$myList.append(myItems.join(''));


//2.3.2

$('#myList li:odd').remove()

//2.3.3

$heading = '<h2> Heading 2 added </h2>';
$para = '<p> new para  </p>';
$('div.module').last().append($heading).append($para);

//2.3.4

$('select[name = "day"]').append('<option value="Wednesday">Wednesday</option>')

//2.3.5

$new_div = $('<div></div>', {'class' : 'module'});
$new_div.text('New Division')
$image = $('img:last')
$new_div.append($image.clone())
$new_div.insertAfter('div:last')


