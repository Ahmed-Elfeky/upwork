$(document).ready(function () {
  $(".dewal").click(function () {
    $(".dropdown-menu-dewal").slideToggle(300);
  });
  $(".mehan").click(function () {
    $(".dropdown-menu-mehan").slideToggle(300);
  });

  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
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

  $(".fa-bars").click(function () {
    $("#mobile").slideToggle();
  });
});
