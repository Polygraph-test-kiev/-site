$(function(){
  var $btnMenu = $('.jsMenu');
  $btnMenu.click(function () {
    $(this).toggleClass('menu-is-active');
    $('._nav').slideToggle();
  });
  
  
  if ( $(window).width() < 992) {
    var $upButton = $('.upButton');
    $(window).on('scroll', function () {
     if (($(window).scrollTop() >= 50)) {
      $upButton.fadeIn();
    } else {
      $upButton.fadeOut();
    }
  });

    $('.upButton').click(function () {
      $('body,html').animate({scrollTop: 0}, 1000);
      return false;
    });
  }
  
  
  $('.jsVideoScores').slick({
    prevArrow: $('.video_scores_prev'),
    nextArrow: $('.video_scores_next'),
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        centerMode: false,
      }
    }
    ]
  }).on('beforeChange', function(event, slick, nextSlide){
    $(this).find('.slick-current ._img').removeClass('active');
  })
  .on('afterChange', function(event, slick, currentSlide){
    $(this).find('.slick-current ._img').addClass('active');
  });
  $('.jsVideoScores').find('.slick-current ._img').addClass('active');
  
  
  $('.jsConditionsTreatment').slick({
    prevArrow: $('.conditions_treatment_prev'),
    nextArrow: $('.conditions_treatment_next'),
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        centerMode: false,
      }
    }
    ]
  }).on('beforeChange', function(event, slick, nextSlide){
    $(this).find('.slick-current ._img').removeClass('active');
  })
  .on('afterChange', function(event, slick, currentSlide){
    $(this).find('.slick-current ._img').addClass('active');
  });
  $('.jsConditionsTreatment').find('.slick-current ._img').addClass('active');
  
  
  $('.jsDoctorsSpecialists').slick({
    prevArrow: $('.doctors_specialists_prev'),
    nextArrow: $('.doctors_specialists_next'),
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  
  
  $('.jsAwardsSpecialists').slick({
    prevArrow: $('.awards_specialists_prev'),
    nextArrow: $('.awards_specialists_next'),
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  
  $('.jsStagesSlider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:false,
    
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }
    ]
  });
  
  $('.jsReviewsSlider').slick({
    prevArrow: $('.reviews_prev'),
    nextArrow: $('.reviews_next')
  });
  
  $('.jsHospitalSlider').slick({
    prevArrow: $('.hospital_prev'),
    nextArrow: $('.hospital_next')
  });
  
  if ($(window).width() < 1200) {
    $('.jsChooseUs').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
    });
  }
  
  if ( $(window).width() < 992) {
    
    $('.b_why_choose_us ._why_choose_us').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
    });
    
  }
  
  
  var $SubmitYourRequest = $('.jsModal'),
  $closemodal = $('.modal .close'),
  $modal = $('.modal-content'),
  $modalbackdrop = $('.modal-backdrop');
  
  $SubmitYourRequest.click(function(e){
    e.preventDefault();
    $('.modal-backdrop').fadeIn(200);
    var $href = $(this).attr('href');
    $($href).fadeIn(300);
  });
  
  $closemodal.click(function(){
    $modal.parents('.modal').fadeOut(200);
    $modalbackdrop.fadeOut(200);
  });
  
  function SidebarHeight(){
    var $sidebarheight = $('._stages_sidebar').parent().height();
    $('._stages_sidebar').height($sidebarheight);
  }
  if( $(window).width() > 992){
    SidebarHeight();
  }
  
  $('.open_close_sidebar').click(function(e){
    e.preventDefault();
    $('._stages_sidebar').toggleClass('active');
    $(this).toggleClass('menu-is-active');
  })
  
  $('._why_choose_us ._item')
  .mouseover(function(){
    $(this).find('._all_item_info').fadeIn(300);
  })
  .mouseleave(function(){
    $(this).find('._all_item_info').fadeOut(100);
  })
  ;
  
  $('.jsSubMenu').click(function(){
    $(this).next().slideToggle();
  });
  
  
  $(document).click(function (e) {
    if ( !$modal.is(e.target) && $modal.has(e.target).length === 0 && !$SubmitYourRequest.is(e.target) && $SubmitYourRequest.has(e.target).length === 0 ) {
      $modal.parents('.modal').fadeOut(200);
      $modalbackdrop.fadeOut(200);
    }
  });
  
  $.fn.extend({
    animateCss: function (animationName, callback) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated');
      this.addClass(animationName).one(animationEnd, function() {
        $(this).removeClass(animationName);
        if (callback) {
          callback();
        }
      });
      return this;
    }
  });
  
  if( $(window).width() > 1200){
    $('._choose_item').mouseover(function() {
      $(this).animateCss('bounceIn');
    });
  }
  
  $(window).scroll(function () {
    var bottom_of_window = $(window).scrollTop();
    $('.b_rehabilitation_center ._center_item').each(function (i) {
      var  bottom_of_object = $(this).offset().top - $(this).outerHeight() * 3;
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('animated bounceInUp');
      }
    });
  });
  
});



$( window ).load(function() {

  $.fn.equivalent = function (){
    var $blocks = $(this),
    maxH    = $blocks.eq(0).height(); 
    $blocks.each(function(){
      maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
    });
    $blocks.height(maxH); 
  }
  $('.slides').equivalent();
  
  
  
  $('.b_main_banner ._sub_title').animateCss('bounceInLeft');
  setTimeout(function(){ $('.b_main_banner ._main_title').animateCss('bounceInUp'); }, 1000);
});