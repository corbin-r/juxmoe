import Link from 'next/link'

const UINavbarController = (props) => (
	<nav 
		role="navigation"
		className="mastnav--container"
		>
	  <div className="mastnav mastnav--left">
		<Link href="/" prefetch><a>🦄</a></Link>
	  </div>
	  <div className="mastnav mastnav--right">
		<ul className="navbox-container">
			<Link prefetch href="/about">
				<a className="nbl">About Me</a>
			</Link>
		  	<Link prefetch href="https://corbin.life">
				<a className="nbl">Blog</a>
		  	</Link>
		</ul>
	  </div>
	  <style jsx>{`
	  .dark {
		  background: rgba(0, 0, 0, 0.8); 
		}
		.dark .mastnav--right ul a {
			color: #fff
		}
		.large {
			width: calc(100%);
			left: 0;
			border-radius: 0;
			border-bottom: 1px solid rgba(255, 255, 255, 0.1)
		}
	  `}</style>
	</nav>
)

export default UINavbarController
