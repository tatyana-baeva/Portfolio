//sliders
    $('.quote-sl').slick({
			slidesToShow: 1,
		  slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			dots: false,
			prevArrow: '<div class="prev"><img src="images/left.png"></div>',
			nextArrow: '<div class="next"><img src="images/right.png"></div>'
		});
    $('.testimonial-sl').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			dots: false,
			prevArrow: '<div class="prev1"><img src="images/left.png"></div>',
			nextArrow: '<div class="next1"><img src="images/right.png"></div>'
		});
		$(".header-sl").slick({
		  infinite: true,
		  arrows: false,
		  dots: false,
		  autoplay: false,
		  speed: 800,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		});
//Прогресбар
    var percentTime;
    var tick;
    var time = 1;
    var progressBarIndex = 0;
    $('.progressBarContainer .progressBar').each(function(index) {
        var progress = "<div class='inProgress inProgress" + index + "'></div>";
        $(this).html(progress);
    });
    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, 10);
    }
    function interval() {
        if (($('.header-sl .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
            progressBarIndex = $('.header-sl .slick-track div[aria-hidden="false"]').data("slickIndex");
            startProgressbar();
        } else {
            percentTime += 1 / (time + 5);
            $('.inProgress' + progressBarIndex).css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $('.single-item').slick('slickNext');
                progressBarIndex++;
                if (progressBarIndex > 2) {
                    progressBarIndex = 0;
                }
                startProgressbar();
            }
        }
    }
    function resetProgressbar() {
        $('.inProgress').css({
            width: 0 + '%'
        });
        clearInterval(tick);
    }
    startProgressbar();
    $('.progressBarContainer div').click(function () {
    	clearInterval(tick);
    	var goToThisIndex = $(this).find("span").data("slickIndex");
    	$('.single-item').slick('slickGoTo', goToThisIndex, false);
    	startProgressbar();
    });
	//скрипт закрытия меню
		$(window).on('resize', function() {
			if (window.innerWidth > 1024) {
				$('.header-nav').removeClass('active')
			}
		})
		$('label[for="name"]').on('click', function() {
		  $(this).toggleClass('active')
		  $('.header-nav').toggleClass('active')
		})
		$('.header-list-item a').on('click', function() {
		  $('label[for="name"]').removeClass('active')
		  $('.header-nav').removeClass('active')
		})
	//аккордион
		$('.accordion-item__header').on('click', function () {
			var content = $(this).next()
			var parent = $(this).parent()
			if (parent.hasClass('active')) {
				parent.removeClass('active')
				content.stop().slideUp(400)
			} else {
				$('.accordion-item.active')
					.removeClass('active')
					.find('.accordion-item__content')
					.stop()
					.slideUp(400)
				parent.addClass('active')
				content.stop().slideDown(400)
			}
		});
		$(function() {
  var $panel = $('div.acordion-wrapper > div.acordion-count').hide();
  $panel.first().show();
  $('.acordion-wrapper div.acordion-title > h1').on('click', function(event) {
     var $this = $(this);
    $panel.slideUp();
    $this.parent().next().slideDown();
    return false;
  })
})
	//скрол и кнопка наверх
		function bodyAnimateScroll(top) {
			$('html, body').stop().animate({
				scrollTop: top
			}, 400)
		}
		$('.header-nav a').on('click', function (event) {
		  event.preventDefault();
		  var selector = $(this).attr('href');
		  var top = $(selector).offset().top
		  bodyAnimateScroll(top)
		});
		$('#up').on('click', function() {
			bodyAnimateScroll(0)	
		})
		function toggleUpBtn() {
			if ($('body').scrollTop() > window.innerHeight) {
				$('#up').addClass('active')
			} else {
				$('#up').removeClass('active')
			}
		}
		toggleUpBtn()
		$(window).on('scroll', function() {
			toggleUpBtn()
		})
		//scroll
    $(".accordion-item__content").mCustomScrollbar({
   		scrollInertia: "0"
});
