import Header from '../comps/header'
import Navbar from '../comps/navbar'
import AboutHeader from '../comps/about/about-header'
import ContainerLayout from '../comps/about/container-layout'

export default () => (
	<div>
		<Header />
			<div className="masthead-outer--container">
				<Navbar isFull="true" isDark="true" />
				<AboutHeader />

				<ContainerLayout>
					<div className="hero-title-container col-full"></div>
				</ContainerLayout>
			</div>
			<script src="/static/blurtrans.js"></script>
	</div>
)
