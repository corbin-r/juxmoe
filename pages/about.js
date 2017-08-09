import Header from '../comps/header'
import UINavbarController from '../comps/ui-navbar'
import UIAboutContainer from '../comps/about/about-header'
import ContainerLayout from '../comps/container-layout'

export default () => (
	<div>
		<Header titleDescriptor="- About Me" />
			<div className="masthead-outer--container">
				<UINavbarController isFull="true" isDark="true" />
				<UIAboutContainer />

				<ContainerLayout marginData={{ margin: 0 + 'px' + 'auto'}}>
					<div className="hero-title-container title-talking-points col-full">

						<div className="hero-point-container col-md">
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

						<div className="hero-point-container col-md">
							<h1 className="hero-title-item">Designer</h1>
							<h3 className="hero-title-sub">
								Skilled in
									<ul>
										<li><span>❯</span> Photoshop CC</li>
										<li><span>❯</span> Sketch</li>
									</ul>
							</h3>
						</div>

						<div className="hero-point-container col-md">
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
					</div>
				</ContainerLayout>
			</div>
	</div>
)
