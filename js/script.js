  $(document).ready(function(){
    if($('.projects-wrapper').length > 0){
      $('.projects-wrapper').filterizr();
      $('.projects-menu > li').click(function(e){
        e.preventDefault();
        $('.projects-menu > li').removeClass('active-btn')
        $(this).addClass('active-btn');
      })
    }

    if($('.order-wrapper').length > 0){
      $('.container-top').addClass('active-top');
      $('.next-step').click(function(e){
        e.preventDefault();
        if ($('.active-section').next('.step').length) {
          $('.active-section').removeClass('active-section')
          .next('.step').addClass('active-section').animate({
            "left": "0",
            "opacity":1
          }, "slow");

        }
      });

    }
    $(".type-wrap").typed({
      strings: ["Website?", "Logo?", "orice alt design?"],
      stringsElement: null,
      typeSpeed: 0,
      startDelay: 0,
      backSpeed: 0,
      shuffle: false,
      backDelay: 2000,
      fadeOut: false,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 1500,
      loop: true,
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
    var option_one = document.getElementById('order-input').value;
    var alert_popup = '<div class="alert"><div class="right"><a class="close-alert" onclick="closePopup()"><i class="fas fa-times-circle"></i></a></div>PLease bla bla</div> <div class="overlay" onclick="closePopup()"></div> ';
    if(option_one == 0){
      document.body.insertAdjacentHTML( 'beforeend', alert_popup );
      document.querySelector('.overlay').style.display = 'block';
      setTimeout(function(){
        document.querySelector('.alert').classList.add("shown-alert");
      }, 100)
      return false;
    }
    else{
      location.href = option_one;

    }

  }

  function closePopup() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.alert').classList.remove("shown-alert");
    return false;
  }
