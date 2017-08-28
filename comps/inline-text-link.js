const InlineFontLink = (props) => (
	<div className="inline__NEXT">
		<a
			href={props.link}
			className={props.staticClassName}
			target={props.linkTarget}
		>
		{props.linkText}
		</a>
	</div>
)

export default InlineFontLink