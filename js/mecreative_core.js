jQuery(document).ready(function() {
  
  if(jQuery(".node--type-page div").hasClass("basic-page-with-header-image")){
       jQuery('.node--type-page').addClass("with-header-image");
    }
    else{
       jQuery('.node--type-page').addClass("without-header-image");
    }
    
  // //menu scroll  
  // jQuery('.navbar-toggle').on('click', function(){
  //   if(jQuery('body').hasClass('.toggled') == true) jQuery('body').css("overflow","auto");
    
  // })
  // navbar-toggler
	jQuery('.navbar-toggler').click(function(){
    jQuery(this).toggleClass("active");
  });


// placeholder for mailchimp
  $email = Drupal.t('Your Email address');
  jQuery('#edit-submitted-email, #edit-mergevars-email').attr('placeholder',  $email);
  jQuery('#edit-submitted-email, #edit-mergevars-email').focusin(function(){
      jQuery(this).attr('placeholder','');
  });
  jQuery('#edit-submitted-email, #edit-mergevars-email').focusout(function(){
      jQuery(this).attr('placeholder', $email);
  });

  $name = Drupal.t('Your Name');
  jQuery('#edit-submitted-name, #edit-mergevars-fname').attr('placeholder',  $name);
  jQuery('#edit-submitted-name, #edit-mergevars-fname').focusin(function(){
      jQuery(this).attr('placeholder','');
  });
  jQuery('#edit-submitted-name, #edit-mergevars-fname').focusout(function(){
      jQuery(this).attr('placeholder', $name);
  });

//for slide down 
  jQuery('.angle-down').click(function() {
   $off=jQuery('.about-us-wrapper').offset().top;
     jQuery('html,body').animate({scrollTop:$off}, 1000);
  });

//Contact Us
  jQuery("#block-address-2, #block-followus-2").wrapAll('<div class="wrap-social"></div>');
  jQuery("#block-map, .wrap-social").wrapAll('<div class="wrap-contact"></div>');
  jQuery("#block-map").wrapAll('<div class="wrap-map"></div>');

// Our Work
  jQuery(".ourwork-detail-link, .ourwork-detail-body").wrapAll('<div class="ourwork-detail-content"></div>');
  jQuery(".ourwork-detail-title, .ourwork-detail-image").wrapAll('<div class="ourwork-detail-header"></div>');

// Tour
  jQuery(".basic-page-title, .basic-page-heading-one").wrapAll('<div class="tour-detail-header"></div>');

//blue-plaque-yangon placeholder
  $search = Drupal.t('Search');
  jQuery('#edit-title').attr('placeholder',  $search);
  jQuery('#edit-title').focusin(function(){
      jQuery(this).attr('placeholder','');
  });
  jQuery('#edit-title').focusout(function(){
      jQuery(this).attr('placeholder', $search);
  });


//dropdown menu responsive
  jQuery(".we-mega-menu-submenu").parent("li").addClass("submenu");
  jQuery(".we-mega-menu-submenu").before("<div class='nav-toggle'></div>");

  // if(jQuery(".dropdown-menu").hasClass("active")){
  //   jQuery(".we-mega-menu-submenu").hide();
  // }
  
  jQuery(".nav-toggle").click(function() {
    jQuery(this).toggleClass('active');
    jQuery(this).siblings(".we-mega-menu-submenu").slideToggle("300");
    
  });

  jQuery("[class*=donor-level]").siblings().click(function() {
    jQuery(this).siblings().find("details").removeAttr("open");
  });

  //event.preventdefault() for home page loading
  jQuery('#navbar-main li#id-2').on('click touchstart', function(event) {
    jQuery('html,body').stop().animate({
    scrollTop: jQuery("#block-wepassionate").offset().top - jQuery('#header').height()}, 800);
    event.preventDefault();
  });
  jQuery('#navbar-main li#id-3').on('click touchstart', function(event) {
    jQuery('html,body').stop().animate({
    scrollTop: jQuery("#block-services").offset().top - jQuery('#header').height()}, 1000);
    event.preventDefault();
  });
  jQuery('#navbar-main li#id-4').on('click touchstart', function(event) {
    jQuery('html,body').stop().animate({
    scrollTop: jQuery("#block-views-block-testing-video-slider-block-1").offset().top - jQuery('#header').height()}, 1500);
    event.preventDefault();
  });
  jQuery('#navbar-main li#id-5').on('click touchstart', function(event) {
    jQuery('html,body').stop().animate({
      scrollTop: jQuery("#contact-us").offset().top}, 1700);
      event.preventDefault();
    });
  // if (jQuery(window).width() < 992) {
  //   jQuery('.navbar-we-mega-menu').css('display', 'none');
  //   jQuery(".navbar-toggle").click(function() {
  //     jQuery('.navbar-we-mega-menu').css({'display': 'block','transition':'none'});
  //   });
  // }

  // if (jQuery(window).width() < 1024) {
  //   jQuery('#navbar-main li#id-2').on('click touchstart', function(event) {
  //   jQuery('html,body').stop().animate({
  //     scrollTop: jQuery("#block-wepassionate").offset().top}, 800);
  //     event.preventDefault();
  //   });
  //   jQuery('#navbar-main li#id-3').on('click touchstart', function(event) {
  //   jQuery('html,body').stop().animate({
  //     scrollTop: jQuery("#block-services").offset().top}, 1000);
  //     event.preventDefault();
  //   });
  //   jQuery('#navbar-main li#id-4').on('click touchstart', function(event) {
  //   jQuery('html,body').stop().animate({
  //     scrollTop: jQuery("#block-views-block-testing-video-slider-block-1").offset().top}, 1500);
  //     event.preventDefault();
  //   });
  //   jQuery('#navbar-main li#id-5').on('click touchstart', function(event) {
  //   jQuery('html,body').stop().animate({
  //     scrollTop: jQuery("#contact-us").offset().top}, 1700);
  //     event.preventDefault();
  //   });
  // }
});

