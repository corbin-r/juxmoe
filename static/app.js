(function($) {

  $(window).scroll((e) => {
    e.preventDefault()

    $(this).scrollTop() > 0
      ? $('nav').addClass('nav--scrolled')
      : $('nav').removeClass('nav--scrolled')
  })
})(jQuery)



$('.navbox-link[data-link-type="projects"]').click((e) => {
  e.preventDefault()
  TweenLite.to($(window), 1, {scrollTo: "#main-project", ease: Expo.easeOut})
})

function runstart(){
  let _introbjs = [
    '.masthead-inner-image-prev'
    , '.supermast-banner'
    , '.supermast-sub-banner'
    , '.masthead-intro-list'
  ]
  TweenMax.staggerFromTo(_introbjs, 1.94, {
                    top: '400px',
                    autoAlpha: 0,
                    ease: Expo.easeInOut,
                    delay: 0.84
                  },{
                    top: '0',
                    autoAlpha: 1,
                    ease: Expo.easeInOut
                  })

TweenMax.fromTo($('.mastnav--container'), 2.20, {
                  top: '-100%',
                  autoAlpha: 0,
                  ease: Expo.easeInOut,
                  delay: 1.24
                },{
                  top: '0',
                  autoAlpha: 1,
                  ease: Expo.easeInOut
                })

}
runstart()


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
	