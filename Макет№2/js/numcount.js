var time = 1;
var counterEnabled = false
$(window).on('scroll load', function(){
  if (($('#counter').offset().top < $(window).scrollTop() + window.innerHeight) && !counterEnabled) {
    counterEnabled = true
    $('#counter').each(function(){
      $('div').each(function(){
        var 
        i = 1,
        num = $(this).data('num'),
        step = 1000 * time / num,
        that = $(this),
        int = setInterval(function(){
          if (i <= num) {
            that.html(i);
          }
          else {
            clearInterval(int);
          }
          i++;
        },step);
      });
    });
  }
  
})