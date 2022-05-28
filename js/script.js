$(document).ready(function () {
  $(".dewal").click(function () {
    $(".dropdown-menu-dewal").slideToggle(300);
  });
  $(".mehan").click(function () {
    $(".dropdown-menu-mehan").slideToggle(300);
  });
  // slider section///
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
  });

  // الجزء الخاص بصفحة تتبع طلبك
  $(".fa-eye").click(function () {
    $(this).addClass("active");
    if ($(this).hasClass("active")) {
      $(this).parent().parent().siblings().slideToggle(800);
    }
  });
  // arrow-up in the bottn page button to move up  //////
  $("#arrow-up").click(function () {
    $("body,html").animate({
      scrollTop: 0,
    });
  });
  // menu for mobile or small screen////
  $(".fa-bars").click(function () {
    $("#mobile").slideToggle();
  });
});
