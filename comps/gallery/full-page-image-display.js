/*
	FPIViewController - Full Page Image View Controller
	====================

	Creates a full page image view (like on the about page) that is used
		to create full height/width image views on the page.
*/

const defaultLayoutStyles = {
	imgUrl: '',
	backgroundImage: `url('${this.imgUrl}')`
}

const FPIViewController = (props) => (
	<section className="next-layout__FPIViewController">
		<div className="sticky-container">
			<figure
				className="GHS_Image main-img"
				style={ defaultLayoutStyles }>
			</figure>

			<figure
				className="GHS_Image blur-img"
				style={{ display: 'block', 'background-image': defaultLayoutStyles.backgroundImage }}>
			</figure>

			<div
				className="GHS_Image blur-bg"
				style={{ display: 'block', 'background-image': defaultLayoutStyles.backgroundImage }}>
			</div>
		</div>
	</section>
)

export default FPIViewController
