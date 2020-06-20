$(document).ready(function () {
  $(".hamburger").click(function () {
    $('nav').toggleClass('nav-open');
    $('.right-header').toggleClass('nav-open');
    $(".hamburger").toggleClass('cross');
  });

  $(".tablinks").click(function () {
    $('.tablinks').toggleClass('active');
    $('.tabcontent').toggleClass('show');
  });

  $(window).trigger('resize');

  // $(function () {
  //   var i, tabcontent, tablinks;
  //   tabcontent = $(".tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }
  //   tablinks = document.getElementsByClassName("tablinks");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace(" active", "");
  //   }
  //   document.getElementById(cityName).style.display = "block";
  //   evt.currentTarget.className += " active";
  // })
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