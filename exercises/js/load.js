var LoadExternalContent = function() {
    this.init();
} 


LoadExternalContent.prototype = {

    init: function() {
        headline_elements = $('div#blog h3');
        this.appendDivAfterEveryBlogHeading();
        this.bindClick();
    },

    appendDivAfterEveryBlogHeading: function() {
        this.appendDivElement($(headline_elements));
        this.setReferenceInData();
    },

    appendDivElement: function(element) {
        $('<div class="child_div"></div>').insertAfter(element);
    },

    setReferenceInData: function() {
        new_div = $('div#blog div');
        $.each(new_div, function(index,value){
            $(new_div[index]).data("index", index+1);
            $(headline_elements[index]).data("reference", new_div[index]);
        })
    },

    loadContentInTargetDiv: function(element) {
        
        var heading_sibling = $(element).next('div');
        var heading_sibling_data = heading_sibling.data('index');
        sr = 'data/blog.html #post' + heading_sibling_data;
                
         $(heading_sibling).load(sr, function () { 
            console.log("fuck off");
            
        });
    },


    bindClick: function() {
        var class_object = this;
        headline_elements.bind('click', function(event) {
        event.preventDefault();
        class_object.loadContentInTargetDiv($(this));
        });
    }
}

$(function(){
    new LoadExternalContent();
});
