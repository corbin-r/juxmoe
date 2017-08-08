import UINavbarController from '../comps/ui-navbar'
import HeroIntro from '../comps/intro-hero'
import Header from '../comps/header'

export default () => (
	<div>
		<Header />
		  <UINavbarController isFull="false" isDark="false" />
		  <HeroIntro />

		  <div className="masthead-container-full mast-project--main col-full" id="main-project" data-force-color="hyperline">
			<div className="masthead-project-title">
			  <h1>Main Project I work on</h1>
			</div>
			<div className="masthead-content-project content-card content-popout-massive">
				<div className="prev-project-img">
			  		<img src="/static/i/hyperline.png"></img>
			  	</div>
			  	<div className="project-intro-right">
					<h5>Hyperline</h5>
			  	</div>
			  	<div className="project-intro-expo">
					<p>
				  	I am a core contributor to Hyperline, a HyperJS plugin, primarily written in JS and React.
					</p>

				<div className="core-button out-of-site-link center-in-container">
				  <a target="_self" className="page-link-bright has--core-anim" href="https://github.com/hyperline/hyperline">
					Check it out
				  </a>
				</div>
			  </div>
			</div>
		</div>
		<script type="text/javascript" src="/static/introworker.js"></script>
	</div>
)
