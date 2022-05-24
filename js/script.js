$(document).ready(function(){

$('.dewal').click(function(){
    $('.dropdown-menu-dewal').slideToggle(300)
})
$('.mehan').click(function(){
    $('.dropdown-menu-mehan').slideToggle(300)
})

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


$('.join').click(function(){
    $(this).hide()
 
    $('.form-popup').css('transform','scale(1)')
})

$('.cancel').click(function(){
    $('.join').show()
    $('.form-popup').css('transform','scale(0)')
})







})