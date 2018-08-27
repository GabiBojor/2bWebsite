  $(document).ready(function(){
    if($('.select-wrapper').length > 0){
      $('.select-wrapper').each(function() {
        $(this).children('select').css('display', 'none');

        var $current = $(this);

        $(this).find('option').each(function(i) {
          if (i == 0) {
            $current.prepend($('<div>', {
              class: $current.attr('class').replace(/select-wrapper/g, 'select_box')
            }));

            var placeholder = $(this).text();
            $current.prepend($('<span>', {
              class: $current.attr('class').replace(/select-wrapper/g, 'select_placeholder'),
              text: placeholder,
              'data-placeholder': placeholder
            }));

            return;
          }

          $current.children('div').append($('<span>', {
            class: $current.attr('class').replace(/select-wrapper/g, 'select_box_options'),
            text: $(this).text()
          }));
        });
      });

  // Toggling the `.active` state on the `.sel`.
  $('.select-wrapper').click(function() {
    $(this).toggleClass('active');
  });

  // Toggling the `.selected` state on the options.
  $('.select_box_options').click(function() {
    var txt = $(this).text();
    var index = $(this).index();

    $(this).siblings('.select_box_options').removeClass('selected');
    $(this).addClass('selected');

    var $currentSel = $(this).closest('.select-wrapper');
    $currentSel.children('.select_placeholder').text(txt);
    $currentSel.children('select').prop('selectedIndex', index + 1);
  });

}
if($('.logo-slider').length > 0){
  $('.logo-slider').flexslider({
    animate: 'fade',
    slideshowSpeed: '2000'
  })
}
if($('.change-top').length > 0){
  $('.container-top').addClass('active-top');
}
if($('.projects-wrapper').length > 0){
  $('.projects-wrapper').filterizr();
  $('.projects-menu > li').click(function(e){
    e.preventDefault();
    $('.projects-menu > li').removeClass('active-btn')
    $(this).addClass('active-btn');
  })
}

if($('.order-wrapper').length > 0){
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
