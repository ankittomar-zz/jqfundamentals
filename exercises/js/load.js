var LoadExternalContent = function() {
    this.headline_elements = $('div#blog h3');
    this.init();
} 

LoadExternalContent.prototype = {

    init: function() {
        
        $('<div></div>').addClass('child_div').insertAfter($(this.headline_elements));
        this.setReference();
        this.bindEvent();
    },

    setReference: function() {
        var that = this;
        $.each($('div#blog div'), function(index,value){
            $(this).data("index", index+1);
            $(that.headline_elements[index]).data("reference", $(this));
        })
    },

    loadContent: function(element) {
        var heading_sibling = $(element).next('div');
        var content = 'data/blog.html #post' + heading_sibling.data('index');
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