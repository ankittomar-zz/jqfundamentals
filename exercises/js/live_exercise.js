var AddRemoveDIv = function() {
    this.init();
}

AddRemoveDIv.prototype = {
    
    init: function() {
        var parent_container = $('#container');
        this.bindClick(parent_container);
    },

    add_new_div: function(parent_container) {
        var counter = class_object.findNumberOfChild(parent_container)+2;
        parent_container.append("<div id ="+ counter +"> Div added</div>");
        //console.log('in add_new_div method');
    },

    findNumberOfChild: function(parent_container){
        return parent_container.children().length;
    },

    bindClick: function(parent_container) {
        class_object = this;

        $('body').delegate('#add_new_div', 'click', function(){
            class_object.add_new_div(parent_container);
        });
        $(parent_container).delegate('div', 'click', function(){
            class_object.highlight_delete($(this), parent_container);
        });
    },

    highlight_delete: function(element, parent_container) {
        var number_of_element = class_object.findNumberOfChild(parent_container);
        //console.log('element inedex' + $(element).index());
        //console.log('counter' + number_of_element)-1;
        if($(element).index() == number_of_element-1)
        {
            $(element).remove();
            //console.log('remove');
        }
        else
        {
            $(element).addClass('highlight');
        }
    }
}

$(function(){
    new AddRemoveDIv();
});

