import Link from 'next/link'
// import Component from 'react/dist/react'


// class NavbarDark extends Component {
// 	constructor(props) {
// 		super(props)
//
// 		this.state = {
// 			isDarkMode: false,
// 			isFullWidth: false
// 		}
// 	}
//
// 	let navJsx = null;
// 	render() {
// 		if (isDarkMode && isFullWidth) {
// 			navJsx = <nav
// 				role="navigation"
// 				className="mastnav--container nd navsm"
// 				is-full={ this.props.state.isFullWidth }
// 				is-dark-mode={ this.props.state.isDarkMode }
// 				>
// 				  <div className="mastnav mastnav--left">
// 					<a className="nel masnav-home-link" href="/" target="_self">🏳️‍🌈</a>
// 				  </div>
// 				  <div className="mastnav mastnav--right">
// 					<ul className="navbox-container">
// 						<Link href="#main-project">
// 							<a className="nel navbox-el" data-link-type="projects">Projects</a>
// 						</Link>
// 					  	<div>
// 							<a className="nel navbox-el" href="https://medium.com/@corbinmatschull">Writings</a>
// 						</div>
// 					  	<Link prefetch href="/about">
// 							<a className="nel navbox-el">About Me</a>
// 						</Link>
// 					  	<Link prefetch href="">
// 							<a className="nel navbox-el cel">Contact</a>
// 					  	</Link>
// 					</ul>
// 				  </div>
// 				</nav>
// 		} else {
// 			navJsx = <nav
// 				role="navigation"
// 				className="mastnav--container nd navsm"
// 				is-full={ this.props.state.isFullWidth }
// 				is-dark-mode={ this.props.state.isDarkMode }
// 				>
// 				  <div className="mastnav mastnav--left">
// 					<a className="nel masnav-home-link" href="/" target="_self">🏳️‍🌈</a>
// 				  </div>
// 				  <div className="mastnav mastnav--right">
// 					<ul className="navbox-container">
// 						<Link href="#main-project">
// 							<a className="nel navbox-el" data-link-type="projects">Projects</a>
// 						</Link>
// 					  	<div>
// 							<a className="nel navbox-el" href="https://medium.com/@corbinmatschull">Writings</a>
// 						</div>
// 					  	<Link prefetch href="/about">
// 							<a className="nel navbox-el">About Me</a>
// 						</Link>
// 					  	<Link prefetch href="">
// 							<a className="nel navbox-el cel">Contact</a>
// 					  	</Link>
// 					</ul>
// 				  </div>
// 				</nav>
// 		}
// 		return (
//
// 		)
// 	}
// }

const Navbar = (props) => (
	<nav role="navigation" className="mastnav--container nd navsm nav" data-is-full={ props.isFull } data-is-dark={ props.isDark }>
	  <div className="mastnav mastnav--left">
		<a className="nel masnav-home-link" href="/" target="_self">🏳️‍🌈</a>
	  </div>
	  <div className="mastnav mastnav--right">
		<ul className="navbox-container">
			<Link href="#main-project">
				<a className="nel navbox-el" data-link-type="projects">Projects</a>
			</Link>
		  	<div>
				<a className="nel navbox-el" href="https://medium.com/@corbinmatschull">Writings</a>
			</div>
		  	<Link prefetch href="/about">
				<a className="nel navbox-el">About Me</a>
			</Link>
		  	<Link prefetch href="">
				<a className="nel navbox-el cel">Contact</a>
		  	</Link>
		</ul>
	  </div>
	</nav>
)

export default Navbar
