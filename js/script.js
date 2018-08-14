  $(document).ready(function(){
      if($('.check-id').length > 0){
      var custom_link = location.hash
      $('.check-id').each(function(){
        var custom_rel = $(this).attr('rel');
        if(custom_link == custom_rel){
          $('.check-id').hide();
          $(this).show();
        }
      })
    }
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
  $(window).scroll(function(){
    if($(window).scrollTop() > 200) {
      $('.container-top').addClass('scrolled-top');
    }
    else{
      $('.container-top').removeClass('scrolled-top');
    }
  });


  function getOrder() { 
    var home_param = document.getElementById('order-input').value.toLowerCase();
    var link = `order.html#${home_param}`;
    var decode = decodeURIComponent((link + '').replace(/\%23/g, '#'));
    location.pathname = decode;
  }

