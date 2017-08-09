const UIAboutContainer = (props) => (
	<div className="GHS-about-container">
		<div className="GHS-about-containing-image-box">

			<div className="sticky-container">
				<figure className="GHS_Image main-img" style={{ display: 'block' }}></figure>
				<figure className="GHS_Image blur-img" style={{ display: 'block' }}></figure>
				<div className="GHS_Image blur-bg" style={{ display: 'block' }}></div>
			</div>
			<h1 className="about-title-hero-header">{ props.heroTitle }</h1>
			<h1 className="about-title-hero-header-sub">{ props.descriptorTitle }</h1>
		</div>
	</div>
)

export default UIAboutContainer
