$(document).ready(function() {
	$(".mobile-nav-trigger").click(function() {
		$("nav").slideToggle('fast', function() {
			$(".mobile-nav-trigger p").toggleClass('active');
		});
	});
});
