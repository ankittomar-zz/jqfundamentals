var Rating = function() {
   this.bindEvent();
}

Rating.prototype = {

  bindEvent: function() {
    var that = this;
    $('td.rating,.beverage').bind('click', function(){ 
      $('.select.'+this.classList[0]).removeClass('select');
      $(this).addClass('select');
      if ($(this).hasClass('rating'))
      {
        $("input[name="+$('.beverage.select').attr('id')+"][value="+$('.rating.select').attr('id')+"]").prop({'checked':true, 'disabled':false});
        $("input[type='radio']:not(:checked)").prop('disabled', true);
      }
    })
  }
} 

$(function(){
  new Rating();
})