import Header from '../comps/header'
import UINavbarController from '../comps/ui-navbar'
import UIAboutContainer from '../comps/about/about-header'
import UIGlobalLayout from '../comps/container-layout'

export default () => (
	<div>
		<Header titleDescriptor="- About Me" />
				<UINavbarController />
				<UIAboutContainer 
					heroTitle="About"
					descriptorTitle="Who am I? What do I do? Where am I?" />

				<UIGlobalLayout>
					<div className="hero-title-container title-talking-points">

						<div className="hero-point-container">
							<h1 className="hero-title-item">Programmer</h1>
							<h3 className="hero-title-sub">
								4 years experience working in
									<ul>
										<li><span>❯</span> Node</li>
										<li><span>❯</span> React</li>
										<li><span>❯</span> Next</li>
									</ul>
								1 year experience in
									<ul>
										<li><span>❯</span> Perl</li>
										<li><span>❯</span> MySQL</li>
									</ul>
							</h3>
						</div>

						<div className="hero-point-container">
							<h1 className="hero-title-item">Designer</h1>
							<h3 className="hero-title-sub">
								Skilled in
									<ul>
										<li><span>❯</span> Photoshop CC</li>
										<li><span>❯</span> Sketch</li>
									</ul>
							</h3>
						</div>

						<div className="hero-point-container">
							<h1 className="hero-title-item">Innovator</h1>
							<h3 className="hero-title-sub">
								Driven by
									<ul>
										<li><span>❯</span> Designing fluent system</li>
										<li><span>❯</span> Always learning</li>
										<li><span>❯</span> Tackling problems head on</li>
									</ul>
							</h3>
						</div>

						<div className="hero-point-seperator"></div>

						<div className="hero-point-container">
							<h1 className="hero-title-item">Where I'm Located</h1>
							<h3 className="hero-title-sub hero-title-sub-lg">
								<span>❯</span> Utah, United States of America
							</h3>
						</div>
						<div className="hero-point-container">
							<h1 className="hero-title-item">My Education</h1>
							<h3 className="hero-title-sub">
								University of Utah
									<ul>
										<li><span>Study Period ❯</span> 2016-2017 <i>(did not complete)</i></li>
										<li><span>Academic Catagories ❯</span> Majored in CS with Music minor</li>
										<li className="inner-list"><span>❯</span> Computer Science</li>
										<li className="inner-list"><span>❯</span> Jazz Piano</li>
									</ul>
								Davis Applied Technology College
									<ul>
										<li><span>Study Period ❯</span> 2015-2017</li>
										<li><span>Academic Catagory ❯</span> Studied CS & IT Systems</li>
										<li><span>Academic Achievements ❯</span> 4 Industry Certifications</li>
										<li className="inner-list"><span>❯</span> CompTIA Strata</li>
										<li className="inner-list"><span>❯</span> Microsoft MTA 98-366 Network Technician</li>
										<li className="inner-list"><span>❯</span> CompTIA A+ 220-901/220-902</li>
										<li className="inner-list"><span>❯</span> CompTIA Network+ N10-006</li>
									</ul>
							</h3>
						</div>
						<div className="hero-point-container">
							<h1 className="hero-title-item">Work</h1>
							<h3 className="hero-title-sub">
								Peak Payment Billing Solutions (2016-<i>Current</i>)
									<ul>
										<li><span>Position ❯</span> IT Engineer (2016-2017)</li>
										<li className="inner-list"><span>Duties  ❯</span> Support and resolve issues with client workstations</li>
										<li><span>Position ❯</span> Front End Developer (2017-<i>Current</i>)</li>
										<li className="inner-list"><span>Duties  ❯</span> Compose and maintain our client systems in Perl and HTML</li>
									</ul>
							</h3>
						</div>																	
					</div>
				</UIGlobalLayout>
	</div>
)
