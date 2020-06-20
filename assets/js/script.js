$(document).ready(function () {
  $(".hamburger").click(function () {
    $('nav').toggleClass('nav-open');
    $('.right-header').toggleClass('nav-open');
    $(".hamburger").toggleClass('cross');
  });
  $(window).trigger('resize');
})

$(window).on('resize', function () {
  var prevScroll = 0, curDir = 'down', prevDir = 'up';
  $(window).scroll(function () {
    if ($(this).scrollTop() >= prevScroll && $(window).width() > 1024) {
      curDir = 'down'; if (curDir != prevDir) {
        $('header').stop();
        $('header').animate({ top: '-93px' }, 300);
        prevDir = curDir
      }
    } else {
      curDir = 'up'; if (curDir != prevDir) {
        $('header').stop();
        $('header').animate({ top: '0px' }, 300); prevDir = curDir
      }
    }
    prevScroll = $(this).scrollTop()
  })
})