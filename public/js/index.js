$(function() {
    $('.autoplay').slick({
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
       dots:true,
    });
});

$(function () {
    var banner = new Swiper('.banner',{
        autoplay: 5000,
        pagination : '.swiper-pagination',
        paginationClickable: true,
        lazyLoading : true,
        loop:true
    });		
});

var test = window.location.href;
console.log(test)
console.log(window.location.search)