//Exercis 4.1

var $search_label = $('label');
$search_box = $('input[name="q"]');
label_text = $search_label.text();
$search_box.val(label_text).addClass('hint');
$search_label.remove();

var manipulate_search_box = function() {
      $search_box.val('').removeClass('hint');
    };
    
var restore_text_class = function() {
    if ($search_box.val() == "")
        {
            $search_box.val(label_text).addClass('hint');
        }
};

$search_box.bind('focus', manipulate_search_box);
$search_box.bind('blur', restore_text_class);


