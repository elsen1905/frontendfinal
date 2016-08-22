$(document).ready(function(){
   // ================tab funksiyasi===================




  $('#tab-head ul li:first').addClass('active');
    $('.content:first').show();
    
    $('#tab-head ul li a').click(function(){
        var id = $(this).attr('href');
        $('#tab-head ul li').removeClass('active');
        $(this).parent().addClass('active');
        $('.content').hide();
        $(id).fadeIn(2000);
    });


    // ==================dripdownmenu====================
    $('ul.nav li.dropdown').hover(function() {
$(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(500);
}, function() {
$(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(500);
});
// =======================scroll menu=================== 
  $(function () {
  var nav = $('.nav-container');
  var sekil = $('.navbar-brand ');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      nav.addClass("fixed-nav");
      $('.navbar-brand > img').remove();
      sekil.append("<img src='assets/images/logo-inverted.png' />")
    } else {
      nav.removeClass("fixed-nav");
      $('.navbar-brand > img').remove();
      sekil.append("<img src='assets/images/logo.png' />")


    }
  });
});

//======================= scroll animate =======================
   $(window).scroll(function(event) {
      var Logos = $(window).scrollTop();
         if (Logos > 215) {
            $(".tek").css("transform","translateX(0px)");
            $(".cut").css("transform","translateX(0px)");
         }
   });

   $(window).scroll(function(event) {
      var ScrollAnimate = $(window).scrollTop();
         if (ScrollAnimate > 493) {
            $("#StartUp_left").css("transform","translateX(0px)");
            $("#StartUp_right").css("transform","translateX(0px)");
         };
         if (ScrollAnimate > 950) {
            $("#NewAge_left").css("transform","translateX(0px)");
            $("#NewAge_right").css("transform","translateX(0px)");
         };
         if (ScrollAnimate > 1556) {
            $("#Helmet_left").css("transform","translateX(0px)");
            $("#Helmet_right").css("transform","translateX(0px)");
         };
   });


   $(window).scroll(function(event) {
      var Ico_Animate = $(window).scrollTop();
         if (Ico_Animate > 2173) {
            $(".Second_Img img").css("transform","rotateX(0deg)")
         }
         if (Ico_Animate > 2600) {
            $(".row1").css("transform","translateX(0px)");
            $(".row2").css("transform","translateX(0px)");
         }
         if (Ico_Animate > 3000) {
            $(".parallax_texts").css("transform","translateX(0px)");
            $(".Inputs").css("transform","translateX(0px)");
         }
   });


   $(window).scroll(function (event) {
    var enbasa = $(window).scrollTop();
    if (enbasa > 550) {
      $(".enbasa").show();
    }else{
      $(".enbasa").hide()
     // body...
    }
   })


   // body...



});