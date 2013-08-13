var LoadExternalContent = function() {
    this.headline_elements = $('div#blog h3');
    this.init();
} 

LoadExternalContent.prototype = {

    init: function() {
        
        this.appendDiv();
        this.bindEvent();
    },

    appendDiv: function() {
        $('<div class="child_div"></div>').insertAfter($(this.headline_elements));
        this.setReference();
    },

    setReference: function() {
        var new_div = $('div#blog div');
        var that = this;
        $.each(new_div, function(index,value){
            $(this).data("index", index+1);
            $(that.headline_elements[index]).data("reference", $(this));
        })
    },

    loadContent: function(element) {
        
        var heading_sibling = $(element).next('div');
        var heading_sibling_data = heading_sibling.data('index');
        var content = 'data/blog.html #post' + heading_sibling_data;
        $(heading_sibling).load(content);
    },


    bindEvent: function() {
        var that = this;
        this.headline_elements.bind('click', function(event) {
        that.loadContent($(this));
        return false;
        });
    }
}

$(function(){
    new LoadExternalContent();
});