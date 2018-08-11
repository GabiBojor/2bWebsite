$(document).ready(function(){
  $(window).scroll(function(){
      if($(window).scrollTop() > 30) {
        $('.container-top').addClass('scrolled-top');
      }
      else{
        $('.container-top').removeClass('scrolled-top');
      }
    });
$(".type-wrap").typed({
  strings: ["Website?", "Logo?", "orice alt design?","Website?", "Logo?", "orice alt design?", "Website?"],
  stringsElement: null,
  typeSpeed: 0,
  startDelay: 0,
  backSpeed: 0,
  shuffle: false,
  backDelay: 2000,
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 1500, 
  loop: false,
  loopCount: false,
  showCursor: true,
  cursorChar: "|",
  attr: null,
  contentType: 'html'
});

})