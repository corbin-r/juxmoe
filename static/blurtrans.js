$(document).ready(function() {

	if (Modernizr.backdropFilter) {
		$('.blur-img').css({ 'display' : 'none' })
		console.log("Browser backdrop-filter SUPPORTED")
	}
	if (!Modernizr.backdropFilter) {
		$('.blur-bg').css({ 'display' : 'none' })
		console.log("Browser backdrop-filter NOT SUPPORTED")
	}

	$(window).scroll((e) => {
		e.preventDefault()
		if (Modernizr.backdropFilter) {
			$(window).scrollTop() > 350
				? $('.blur-bg').addClass('active')
				: $('.blur-bg').removeClass('active')
		} else {
			$('.blur-bg').css({ 'display' : 'none' })
			$(window).scrollTop() > 350
				? $('.blur-img').addClass('active')
				: $('.blur-img').removeClass('active')
		}
	})
})
