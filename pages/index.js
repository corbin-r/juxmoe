import UINavbarController from '../comps/ui-navbar'
import HeroIntro from '../comps/intro-hero'
import Header from '../comps/header'
import UIMastContainer from '../comps/mastheader'
import InlineFontLink from '../comps/inline-text-link'

export default () => (
	<div>
		<Header titleDescriptor="- Home" />
		  <UINavbarController isFull="false" isDark="false" />
		  <UIMastContainer />

		  <div className="mast-project--main col-full" id="main-project">
			<div className="masthead-project-title">
			  <h1>Main Project</h1>
			</div>
			<div className="masthead-content-project content-card">
				<div className="prev-project-img">
			  		<img src="/static/i/hyperline.png"></img>
			  	</div>
			  	<div className="project-intro-right">
					<h5>Hyperline</h5>
			  	</div>
			  	<div className="project-intro-expo">
					<p>
				  	I am a core contributor to Hyperline, a
					<InlineFontLink 
					 	link="https://hyper.is"
						staticClassName="hyper-link__INLINE"
						linkTarget="_self"
						linkText="HyperJS"
					/>
					 plugin, primarily written in JS and React.
					</p>

				<div className="core-button out-of-site-link center-in-container">
				  <a target="_self" className="page-link-bright has--core-anim" href="https://github.com/hyperline/hyperline">
					Check it out
				  </a>
				</div>
			  </div>
			</div>
		</div>
	</div>
)
