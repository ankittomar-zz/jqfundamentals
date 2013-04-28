var $modules = $('div.module');
$modules.hide();

var $ul_element = $('<ul></ul>'), $element; 
$ul_element.insertBefore($modules.first());
var li_arr = []
$modules.each(function() {
    var $module = $(this);
    var $li_item = $('<li>' + $module.find('h2').text() + '</li>');
    $li_item.click(function() {
        $module.show().siblings('.module').hide();
        $(this).addClass('current');
        $(this).siblings('li').removeClass('current');
    });
    $ul_element.append($li_item);
    
});


$modules.first().show();
$ul_element;