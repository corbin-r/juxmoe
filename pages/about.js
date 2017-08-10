import Header from '../comps/header'
import UINavbarController from '../comps/ui-navbar'
import UIAboutContainer from '../comps/about/about-header'
import UIGlobalLayout from '../comps/container-layout'

export default () => (
	<div>
		<Header titleDescriptor="- About Me" />
				<UINavbarController isFull="true" isDark="true" />
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
								With a propensity towards
									<ul>
										<li><span>❯</span> Success driven design</li>
										<li><span>❯</span> Always learning</li>
										<li><span>❯</span> Tackling problems head on</li>
									</ul>
							</h3>
						</div>

						<div className="hero-point-seperator"></div>

						<div className="hero-point-container">
							<h1 className="hero-title-item">Where I'm Located</h1>
							<h3 className="hero-title-sub hero-title-sub-lg">
								<span>❯</span> Utah
							</h3>
						</div>
						<div className="hero-point-container">
							<h1 className="hero-title-item">My Education</h1>
							<h3 className="hero-title-sub">
								University of Utah
									<ul>
										<li><span>❯</span> Spent 1 and a half years <i>(did not complete)</i></li>
										<li><span>❯</span> Studied Computer Science</li>
										<li><span>❯</span> Minored in Music</li>
									</ul>
								Davis Applied Technology College
									<ul>
										<li><span>❯</span> Spent 4 years</li>
										<li><span>❯</span> Studied Computer Science and Information Technology</li>
										<li><span>❯</span> Left with 4 Industry Certifications</li>
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
								Peak Payment Billing Solutions (2016-<i>Present</i>)
									<ul>
										<li><span>❯</span> Spent 1 and a half years <i>(did not complete)</i></li>
										<li><span>❯</span> Studied Computer Science</li>
										<li><span>❯</span> Minored in Music</li>
									</ul>
							</h3>
						</div>																	
					</div>
				</UIGlobalLayout>
	</div>
)
