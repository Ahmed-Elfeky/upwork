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
  // popup sectoin for all workers page ////
  // to add popup cv image
  $(".cv").click(function () {
    // $(this).addClass('activeBtn')
    $("#detailes-cv-popup").addClass("overLay");
    $(this).parent().parent().find(".detiles-cv").css("display", "block");
  });

  // to remove popup cv image
  $(".fa-circle-xmark").click(function () {
    $("#detailes-cv-popup").removeClass("overLay");
    $(".detiles-cv").css("display", "none");
  });
  // // to add popup to login when click button => طلب العامل
  $(".talap").click(function () {
    $("#detailes-cv-popup").addClass("overLay");
    $(".pop-login").css("display", "block");
  });
  // // to close popup to login when click button => طلب العامل

  $("#CloseLogin").click(function () {
    $("#detailes-cv-popup").removeClass("overLay");
    $(".pop-login").css("display", "none");
  });
});
