$(function(){
     $('.venobox').venobox();
 
 });



 $('.banner-slider').slick({
    dots: true,
      arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  }); 
  $('.testi-slider').slick({
    dots: true,
      arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    
  });


    $('.counter').counterUp({
                delay: 10,
                time: 1000
            });








            $(document).ready(function(){
        
              $("#colorful").colorfulTab();    
                
          
          });


          $('.dolar-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            prevArrow:'<i class="fa fa-angle-left prev"></i>',
            nextArrow:'<i class="fa fa-angle-right next"></i>',
            centerMode:true,
            centerPadding:false,
           
          });

          

       