$(document).ready(function () {

	$(window).scroll(function() {

		var wScroll = $(this).scrollTop();

		//activate
		if (wScroll > 20) {
			$('#top-nav').addClass('active');
			$('#nav-slide').addClass('aScrolled');
		}
		else {
			$('#top-nav').removeClass('active');
			$('#nav-slide').removeClass('aScrolled');
		}
	});



	$('#nav-slide').on('click', function(e) {
	e.preventDefault();
	//$(this).addClass('open');
	$('#sidebar-menu').toggleClass('open');

	if ($('#sidebar-menu').hasClass('open')) {
			$('.menu-close').on('click', function(e){
				e.preventDefault();
				$('#sidebar-menu').removeClass('open');
			})
		}
	});
});
