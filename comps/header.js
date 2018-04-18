import Head from 'next/head'

export default (props) => (
	<Head>
		<meta charset="utf-8"></meta>
		<title>Corbin Matschull { props.titleDescriptor }</title>
		<meta name="description" content="A simple blog for a flourishing mind."></meta>
		<meta name="robots" content="index, follow"></meta>
		<meta name="author" content="Corbin Matschull"></meta>
		<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
		<link rel="dns-prefetch" href="https://ajax.googleapis.com"></link>
		<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com"></link>
		<link rel="dns-prefetch" href="https://twemoji.maxcdn.com"></link>
		<link href="//fonts.googleapis.com/css?family=Roboto:300,400,700|Pacifico|Playfair+Display|Montserrat" rel="stylesheet"></link>
		<link rel="stylesheet" href="/static/css/build/app.css"></link>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/jquery.gsap.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/plugins/ScrollToPlugin.min.js"></script>
		<script src="/static/modernizr-custom.js"></script>
		<script src="/static/app.js"></script>
		<script defer 
				src="https://pro.fontawesome.com/releases/v5.0.10/js/all.js"
				integrity="sha384-+1nLPoB0gaUktsZJP+ycZectl3GX7wP8Xf2PE/JHrb7X1u7Emm+v7wJMbAcPr8Ge"
				crossorigin="anonymous">
		</script>
	</Head>
)
