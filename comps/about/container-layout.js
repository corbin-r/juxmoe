const layoutStyle = {
	margin: '0 auto',
	padding: '0 20px',
	zIndex: '8'
}

const ContainerLayout = (props) => (
	<div className="next-container-layout col-xlg" style={ layoutStyle } data-push={ props.push }>
		{props.children}
	</div>
)

export default ContainerLayout
