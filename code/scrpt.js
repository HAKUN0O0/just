$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight: true,
        autoplay:true,
        autoplaySpeed:2000
    });
    $('.header__close_burger').on('click', function(){
		$('.open__clous_burger').toggleClass('open__clous_burger-active')
});
$('.open___clous__burger_info').on('click', function(){
    $('.open__clous_burger').toggleClass('open__clous_burger-active')
});
});