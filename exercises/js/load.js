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
    element.append('<div class="child_div"></div>');
  },

  setReferenceInData: function() {
    $.each(headline_elements, function(index, value) {
      var headline_child_div = $(headline_elements[index]).children('div');
      $(headline_elements[index]).data($(headline_child_div));
    });  

  },

  loadContentInTargetDiv: function(element) {
    
  }


  bindClick: function() {
    var class_object = this;
    headline_elements.bind('click', function(event) {
    event.preventDefault();
    class_object.loadContentInTargetDiv($(this));
    })
  }
}

$(function(){
  new LoadExternalContent();
});
