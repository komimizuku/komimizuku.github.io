const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      spaceBetween: 40,
    }
  }
});

new WOW().init()

$(function() {

  $('.qa__box-q').on('click',function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.qa__box-icon').toggleClass('is-open');
  });

  $('.drawer-icon').on('click',function(e) {
    e.preventDefault();
    $('.drawer-icon').toggleClass('is-active');
    $('.drawer-content').toggleClass('is-active');
    $('.drawer-background').toggleClass('is-active');
    $('.header').toggleClass('is-active');
    $('.main').toggleClass('is-active');
    $('.footer').toggleClass('is-active');
    return false;
  });

  $('a[href^="#"]').click(function() {
    let header = $(".header").innerHeight();
    let speed = 300;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    $('.drawer-icon').removeClass('is-active');
    $('.drawer-content').removeClass('is-active');
    $('.drawer-background').removeClass('is-active');
    $('.header').removeClass('is-active');
    $('.main').removeClass('is-active');
    $('.footer').removeClass('is-active');
    return false;
  });

  $(window).on('scroll', function() {
    if(200 < $(this).scrollTop()) {
      $('.to-top').addClass('is-show');
    } else {
      $('.to-top').removeClass('is-show');
    }
  });

  $(window).on('load resize scroll', function() {
    let wid = $(window).width();
    if(wid <= 767) {
      $('#header').addClass('sp-header');
      $('#header').removeClass('pc-header');
      $('#header').removeClass('pc-header-top');
    } else if(648 >= $(this).scrollTop()) {
      $('#header').addClass('pc-header-top');
      $('#header').removeClass('pc-header');
      $('#header').removeClass('sp-header');
    } else {
      $('#header').addClass('pc-header');
      $('#header').removeClass('pc-header-top');
      $('#header').removeClass('sp-header');
    }
  });

  let $submit = $('#js-submit')
  $('#js-form input, #js-form textarea').on('change', function() {
    if(
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form textarea').val() !== "" &&
      $('#js-form input[name="check"]').prop('checked') === true
    ) {
      $submit.prop('disabled', false)
      $submit.addClass('-active')
    } else {
      $submit.prop('disabled', true)
      $submit.removeClass('-active')
    }
  });
})
