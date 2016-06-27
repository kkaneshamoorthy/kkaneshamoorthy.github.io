$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('#title-container').css({
    'transform' : 'translate(0px, ' + wScroll/4 + '%)'
  });

  $('.scroll-down').css({
    'transform' : 'translate(0px, ' + wScroll/8 + '%)'
  });
});
