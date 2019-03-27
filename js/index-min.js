var $ = jQuery;
$(document).ready(function () {


  $(window).scroll(function () {
    var distanceScrolled = $(this).scrollTop();
    if (distanceScrolled > 60 || $(".menu").hasClass('open')) {
      $('.menu').css('background', "#697061");
    }
  });

  var $root = $('html, body');
  $('a.scroll-tag').click(function () {
    $(".menu.open").removeClass("open").addClass("closed");
    if ($(this).attr('href')[0] == "#") {
      event.preventDefault()
      $root.animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 80
      }, 450);
      return false;
    }
  });
  // $(document).on('scroll', function () {
  //   var scrollPosition = window.scrollY;
  //   if (scrollPosition > $("a[name=contact]").offset().top - 150) {
  //     $('#nav-contact').siblings().removeClass('active')
  //     $('#nav-contact').addClass('active')
  //   } else if (scrollPosition > $("a[name=portfolio]").offset().top - 61) {
  //     $('#nav-portfolio').siblings().removeClass('active')
  //     $('#nav-portfolio').addClass('active')
  //   } else if (scrollPosition > $("a[name=services]").offset().top - 61) {
  //     $('#nav-services').siblings().removeClass('active')
  //     $('#nav-services').addClass('active')
  //   } else if (scrollPosition > $("a[name=about]").offset().top - 61) {
  //     $('#nav-about').siblings().removeClass('active')
  //     $('#nav-about').addClass('active')
  //   } else {
  //     $('#nav-top').siblings().removeClass('active')
  //     $('#nav-top').addClass('active')
  //   }
  // })
  // if ($(window).width() <= 992) {
  //   $(".services-wrapper").removeClass('valign-wrapper');
  // }
  // $(window).resize(function () {
  //   if ($(window).width() <= 992) {
  //     $(".services-wrapper").removeClass('valign-wrapper');
  //   } else if (!$(".services-wrapper").hasClass('valign-wrapper')) {
  //     $(".services-wrapper").addClass('valign-wrapper');
  //   }
  // })
  $(".menu").on("click", function () {
    if ($(".menu").hasClass('closed')) {
      $(".menu.closed").removeClass("closed").addClass("open");
    } else {
      $(".menu.open").removeClass("open").addClass("closed");
    }
  });
  // $('#rsvp-form').on('submit', function () {
  //   $(this).css('opacity', 0);
  //   $('#form-submitted').css('opacity', 1)
  // })
  // $('.modal').modal({
  //   opacity: .6,
  //   inDuration: 400,
  //   outDuration: 300
  // });
});
