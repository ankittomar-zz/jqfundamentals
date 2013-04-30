var $navigation_bar = $('ul#nav');
var $menu_items = $navigation_bar.find('li');
$menu_items.hover(
    function() {
        $(this).addClass('hover')
        $(this).find('ul').slideDown('slow');
    },    
    function() {
        $(this).removeClass('hover')
        $(this).find('ul').slideUp('slow');
       
    })


