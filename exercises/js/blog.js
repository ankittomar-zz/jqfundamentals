var $blog_element = $('#blog');
var $heading = $blog_element.find('h3');
$heading.on('click', function(event) {
    event.preventDefault();
    var $a = $(this).parent().siblings('li').find('p.excerpt:visible').slideUp('slow');
    $(this).siblings('p.excerpt').slideDown('slow');
})

