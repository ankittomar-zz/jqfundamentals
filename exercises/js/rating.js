var Rating = function() {
   this.bindEvent();
}

Rating.prototype = {

  bindEvent: function() {
    $('td.rating, td.beverage').bind('click', function(){ 
      var $this = $(this);
      $("td.select[data-group = " + $this.data('group') + "]").removeClass('select');
      $this.addClass('select');
      if ($this.hasClass('rating') && $('.beverage.select').length > 0)
      {
        $("input[name=" + $('.beverage.select').data('name') + "][value=" + $this.data('name') + "]").prop({'checked':true, 'disabled':false});
        $("input[type='radio']:not(:checked)").prop('disabled', true);
      }
      else
      {
        $('td.rating.select').removeClass('select');
      }
    })
  }
} 

$(function(){
  new Rating();
})