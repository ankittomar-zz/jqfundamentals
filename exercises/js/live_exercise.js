var AddRemoveDIv = function() {
    this.counter = 0;
    this.parent_container = $('#container');
    this.init();
}

AddRemoveDIv.prototype = {
    
    init: function() {
        
        this.bindClick();
    },

    add_new_div: function() {
        class_object.counter = class_object.findNumberOfChild()+1;
        class_object.parent_container.append("<div id ="+class_object.counter +" class='new'> Div " + class_object.counter + "</div>");
    },

    findNumberOfChild: function(parent_container){
        return class_object.parent_container.children().length;
    },

    bindClick: function(parent_container) {
        class_object = this;

        $('body').delegate('#add_new_div', 'click', function(){
            class_object.add_new_div();
        });
        $(class_object.parent_container).delegate('div.new', 'click', function(){
            class_object.highlight_delete($(this));
        });
    },

    highlight_delete: function(element) {
        var number_of_element = class_object.findNumberOfChild();
        if($(element).is(":last-child")) {
            $(element).remove();
        }
        else {
            $(element).toggleClass('highlight');
        }
    }
}

$(function(){
    new AddRemoveDIv();
});

