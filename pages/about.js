import Header from '../comps/header'
import Navbar from '../comps/navbar'
import AboutHeader from '../comps/about/about-header'
import ContainerLayout from '../comps/container-layout'

export default () => (
	<div>
		<Header />
			<div className="masthead-outer--container">
				<Navbar isFull="true" isDark="true" />
				<AboutHeader />

				<ContainerLayout push="true">
					<div className="hero-title-container title-talking-points col-full">

						<div className="hero-point-container col-md">
							<h1 className="hero-title-item">Programmer</h1>
							<h3 className="hero-title-sub">
								4 years experience working in
									<ul>
										<li>❯ Node</li>
										<li>❯ React</li>
										<li>❯ Next</li>
									</ul>
							</h3>
						</div>

						<div className="hero-point-container col-md">
							<h1 className="hero-title-item">Designer</h1>
							<h3 className="hero-title-sub">
								Skillful in
									<ul>
										<li>❯ Photoshop CC</li>
										<li>❯ Sketch</li>
									</ul>
							</h3>
						</div>

						<div className="hero-point-container col-md">
							<h1 className="hero-title-item">Innovator</h1>
							<h3 className="hero-title-sub">
								With a propensity towards
									<ul>
										<li>❯ Success driven design</li>
										<li>❯ Proclivity towards always learning</li>
										<li>❯ Object oriented thinking and design</li>
									</ul>
							</h3>
						</div>
					</div>
				</ContainerLayout>
			</div>
			<script src="/static/blurtrans.js"></script>
	</div>
)
