var Rating = function() {
   this.bindEvent();
}

Rating.prototype = {

  bindEvent: function() {
    var that = this;
    $('td.rating,.beverage').bind('click', function(){ 
      $(".select[data-group = "+$(this).data('group')"]").removeClass('select');
      $(this).addClass('select');
      if ($(this).hasClass('rating') && $('.beverage.select').length>0)
      {
        $("input[name="+$('.beverage.select').data('name')+"][value="+$(this).data('name')+"]").prop({'checked':true, 'disabled':false});
        $("input[type='radio']:not(:checked)").prop('disabled', true);
      }
    })
  }
} 

$(function(){
  new Rating();
})