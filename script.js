$(function() {
	
	//Bucket list parallax effect.
	$('.my_dreams').scroll (function(){
		var scrl = $('.my_dreams').scrollTop();
		$('#boxImg1').css("-webkit-transform", "translateY(" + scrl/2 + "px)");
		$('#boxImg1').css("-moz-transform", "translateY(" + scrl/2 + "px)");
		$('#boxImg1').css("-ms-transform", "translateY(" + scrl/2 + "px)");
		$('#boxImg1').css("transform", "translateY(" + scrl/2 + "px)");
		
		$('#innerBox1').css("-moz-transform", "translateY(" + scrl/3 + "px)");
		$('#innerBox1').css("-ms-transform", "translateY(" + scrl/3 + "px)");
		$('#innerBox1').css("-webkit-transform", "translateY(" + scrl/3 + "px)");
		$('#innerBox1').css("transform", "translateY(" + scrl/3 + "px)");
		
		$('#boxImg2').css("-webkit-transform", "translateY(" + scrl/3 + "px)");
		$('#boxImg2').css("-moz-transform", "translateY(" + scrl/3 + "px)");
		$('#boxImg2').css("-ms-transform", "translateY(" + scrl/3 + "px)");
		$('#boxImg2').css("transform", "translateY(" + scrl/3 + "px)");
		
		$('#innerBox2').css("-webkit-transform", "translateY(" + scrl/2 + "px)");
		$('#innerBox2').css("-moz-transform", "translateY(" + scrl/2 + "px)");
		$('#innerBox2').css("-ms-transform", "translateY(" + scrl/2 + "px)");
		$('#innerBox2').css("transform", "translateY(" + scrl/2 + "px)");
		
		$('#boxImg3').css("-webkit-transform", "translateY(" + scrl/2 + "px)");
		$('#boxImg3').css("-moz-transform", "translateY(" + scrl/2 + "px)");
		$('#boxImg3').css("-ms-transform", "translateY(" + scrl/2 + "px)");
		$('#boxImg3').css("transform", "translateY(" + scrl/2 + "px)");
		
		$('#innerBox3').css("-webkit-transform", "translateY(" + scrl/3 + "px)");
		$('#innerBox3').css("-moz-transform", "translateY(" + scrl/3 + "px)");
		$('#innerBox3').css("-ms-transform", "translateY(" + scrl/3 + "px)");
		$('#innerBox3').css("transform", "translateY(" + scrl/3 + "px)");
		
		$('#boxImg4').css("-webkit-transform", "translateY(" + scrl/3 + "px)");
		$('#boxImg4').css("-moz-transform", "translateY(" + scrl/3 + "px)");
		$('#boxImg4').css("-ms-transform", "translateY(" + scrl/3 + "px)");
		$('#boxImg4').css("transform", "translateY(" + scrl/3 + "px)");
		
		$('#innerBox4').css("-webkit-transform", "translateY(" + scrl/2 + "px)");
		$('#innerBox4').css("-moz-transform", "translateY(" + scrl/2 + "px)");
		$('#innerBox4').css("-ms-transform", "translateY(" + scrl/2 + "px)");
		$('#innerBox4').css("transform", "translateY(" + scrl/2 + "px)");
		
		$('#boxImg5').css("-webkit-transform", "translateY(" + scrl/2 + "px)");
		$('#boxImg5').css("-moz-transform", "translateY(" + scrl/2 + "px)");
		$('#boxImg5').css("-ms-transform", "translateY(" + scrl/2 + "px)");
		$('#boxImg5').css("transform", "translateY(" + scrl/2 + "px)");
		
		$('#innerBox5').css("-webkit-transform", "translateY(" + scrl/3 + "px)");
		$('#innerBox5').css("-moz-transform", "translateY(" + scrl/3 + "px)");
		$('#innerBox5').css("-ms-transform", "translateY(" + scrl/3 + "px)");
		$('#innerBox5').css("transform", "translateY(" + scrl/3 + "px)");
	});
	
	//about me on load
	$('#descp_1').delay(200).fadeIn(1000);
	$('#descp_2').delay(300).fadeIn(1000);
	$('#descp_3').delay(400).fadeIn(1000);
	$('#descp_4').delay(500).fadeIn(1000);
	$('#descp_5').delay(600).fadeIn(1000);
	$('#descp_6').delay(700).fadeIn(1000);
	$('#aboutMeImg').delay(800).fadeIn(1000);
	$('.content_2').delay(900).fadeIn(1000);
	$('.about_positive').delay(1000).fadeIn(1000);
	$('#pos_1').delay(1100).fadeIn(1000);
	$('#pos_2').delay(1200).fadeIn(1000);
	$('#pos_3').delay(1300).fadeIn(1000);
	$('#pos_4').delay(1400).fadeIn(1000);
	$('#pos_5').delay(1500).fadeIn(1000);
	$('#pos_6').delay(1600).fadeIn(1000);
	$('.about_negative').delay(1700).fadeIn(1000);
	$('#neg_1').delay(1800).fadeIn(1000);
	$('#neg_2').delay(1900).fadeIn(1000);
	$('#neg_3').delay(2000).fadeIn(1000);
	$('#neg_4').delay(2100).fadeIn(1000);
	$('#neg_5').delay(2200).fadeIn(1000);
	$('#neg_6').delay(2300).fadeIn(1000);
	$('.content_4').delay(2400).fadeIn(1000);
	$('#acc_1').delay(2500).fadeIn(1000);
	$('#acc_2').delay(2600).fadeIn(1000);
	$('#acc_3').delay(2700).fadeIn(1000);
	$('#acc_4').delay(2800).fadeIn(1000);
	$('#acc_5').delay(2900).fadeIn(1000);
	$('#acc_6').delay(3000).fadeIn(1000);
	
	//home page on scroll
	var $home_animate = $('.home_art');
	function check_view(){
			var window_bottom = ( ($(window).scrollTop()) + ($(window).height())); 
			$.each($home_animate, function(){
				var element_bottom = (($(this).offset().top) + ($(this).outerHeight()));
			if((element_bottom >= $(window).scrollTop()) && ($(this).offset().top <= window_bottom)){
					$(this).addClass('add_animate');
				}
			else{
				$(this).removeClass('add_animate');
			}
		});
	}
	$(window).on('scroll resize', check_view );
	$(window).trigger('scroll');
		});

	// header menu list
	function menuFunction() {
		$("#myMenu").toggleClass('show');
	}
	
	//feedback form validation.
	function validate_form() {
		var w = document.forms["form"]["name"].value;
		var x = document.forms["form"]["email"].value;
		var successmsg = 'Thank you for submitting the form.';
		if (w == "" || w == null) {
			alert("Please enter your Name.");
			return false;
		}
		else if (x == "" || x == null) {
			alert("Please enter your Email.");
			return false;
		}
		return (true);
	}