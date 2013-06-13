var $navigation_bar = $('ul#nav');
var $menu_items = $navigation_bar.find('li');
$menu_items.hover(
    function() {
        $(this).toggleClass('hover')
        $(this).find('ul').slideToggle('slow');
    }
)

