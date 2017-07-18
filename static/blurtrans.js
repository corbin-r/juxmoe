(function($) {
	$(window).scroll((e) => {
		e.preventDefault()

		$(this).scrollTop() > 350
			? $('.GHS_Image.blur-bg').addClass('active')
			: $('.GHS_Image.blur-bg').removeClass('active')
	})
})(jQuery)
