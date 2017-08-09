import Link from 'next/link'

const UINavbarController = (props) => (
	<nav role="navigation" className="mastnav--container nd navsm nav" data-is-full={ props.isFull } data-is-dark={ props.isDark }>
	  <div className="mastnav mastnav--left">
		<a className="nel masnav-home-link" href="/" target="_self">🏳️‍🌈</a>
	  </div>
	  <div className="mastnav mastnav--right">
		<ul className="navbox-container">
			<Link prefetch href="/about">
				<a className="nel navbox-el">About Me</a>
			</Link>
			<Link href="#main-project">
				<a className="nel navbox-el" data-link-type="projects">Projects</a>
			</Link>
		  	<Link prefetch href="">
				<a className="nel navbox-el" href="/gallery">Gallery</a>
			</Link>
		  	<Link prefetch href="https://corbin.life">
				<a className="nel navbox-el">Blog</a>
		  	</Link>
		</ul>
	  </div>
	</nav>
)

export default UINavbarController
