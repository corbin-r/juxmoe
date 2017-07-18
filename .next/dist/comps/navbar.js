"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/basedjux/Desktop/juxmoe/comps/navbar.js";

// import Component from 'react/dist/react'


// class NavbarDark extends Component {
// 	constructor(props) {
// 		super(props)
//
// 		this.state = {
// 			isDarkMode: false,
// 			isFullWidth: false
// 		}
// 	}
//
// 	let navJsx = null;
// 	render() {
// 		if (isDarkMode && isFullWidth) {
// 			navJsx = <nav
// 				role="navigation"
// 				className="mastnav--container nd navsm"
// 				is-full={ this.props.state.isFullWidth }
// 				is-dark-mode={ this.props.state.isDarkMode }
// 				>
// 				  <div className="mastnav mastnav--left">
// 					<a className="nel masnav-home-link" href="/" target="_self">🏳️‍🌈</a>
// 				  </div>
// 				  <div className="mastnav mastnav--right">
// 					<ul className="navbox-container">
// 						<Link href="#main-project">
// 							<a className="nel navbox-el" data-link-type="projects">Projects</a>
// 						</Link>
// 					  	<div>
// 							<a className="nel navbox-el" href="https://medium.com/@corbinmatschull">Writings</a>
// 						</div>
// 					  	<Link prefetch href="/about">
// 							<a className="nel navbox-el">About Me</a>
// 						</Link>
// 					  	<Link prefetch href="">
// 							<a className="nel navbox-el cel">Contact</a>
// 					  	</Link>
// 					</ul>
// 				  </div>
// 				</nav>
// 		} else {
// 			navJsx = <nav
// 				role="navigation"
// 				className="mastnav--container nd navsm"
// 				is-full={ this.props.state.isFullWidth }
// 				is-dark-mode={ this.props.state.isDarkMode }
// 				>
// 				  <div className="mastnav mastnav--left">
// 					<a className="nel masnav-home-link" href="/" target="_self">🏳️‍🌈</a>
// 				  </div>
// 				  <div className="mastnav mastnav--right">
// 					<ul className="navbox-container">
// 						<Link href="#main-project">
// 							<a className="nel navbox-el" data-link-type="projects">Projects</a>
// 						</Link>
// 					  	<div>
// 							<a className="nel navbox-el" href="https://medium.com/@corbinmatschull">Writings</a>
// 						</div>
// 					  	<Link prefetch href="/about">
// 							<a className="nel navbox-el">About Me</a>
// 						</Link>
// 					  	<Link prefetch href="">
// 							<a className="nel navbox-el cel">Contact</a>
// 					  	</Link>
// 					</ul>
// 				  </div>
// 				</nav>
// 		}
// 		return (
//
// 		)
// 	}
// }

var Navbar = function Navbar(props) {
	return _react2.default.createElement("nav", { role: "navigation", className: "mastnav--container nd navsm nav", "data-is-full": props.isFull, "data-is-dark": props.isDark, __source: {
			fileName: _jsxFileName,
			lineNumber: 79
		}
	}, _react2.default.createElement("div", { className: "mastnav mastnav--left", __source: {
			fileName: _jsxFileName,
			lineNumber: 80
		}
	}, _react2.default.createElement("a", { className: "nel masnav-home-link", href: "/", target: "_self", __source: {
			fileName: _jsxFileName,
			lineNumber: 81
		}
	}, "\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08")), _react2.default.createElement("div", { className: "mastnav mastnav--right", __source: {
			fileName: _jsxFileName,
			lineNumber: 83
		}
	}, _react2.default.createElement("ul", { className: "navbox-container", __source: {
			fileName: _jsxFileName,
			lineNumber: 84
		}
	}, _react2.default.createElement(_link2.default, { href: "#main-project", __source: {
			fileName: _jsxFileName,
			lineNumber: 85
		}
	}, _react2.default.createElement("a", { className: "nel navbox-el", "data-link-type": "projects", __source: {
			fileName: _jsxFileName,
			lineNumber: 86
		}
	}, "Projects")), _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 88
		}
	}, _react2.default.createElement("a", { className: "nel navbox-el", href: "https://medium.com/@corbinmatschull", __source: {
			fileName: _jsxFileName,
			lineNumber: 89
		}
	}, "Writings")), _react2.default.createElement(_link2.default, { prefetch: true, href: "/about", __source: {
			fileName: _jsxFileName,
			lineNumber: 91
		}
	}, _react2.default.createElement("a", { className: "nel navbox-el", __source: {
			fileName: _jsxFileName,
			lineNumber: 92
		}
	}, "About Me")), _react2.default.createElement(_link2.default, { prefetch: true, href: "", __source: {
			fileName: _jsxFileName,
			lineNumber: 94
		}
	}, _react2.default.createElement("a", { className: "nel navbox-el cel", __source: {
			fileName: _jsxFileName,
			lineNumber: 95
		}
	}, "Contact")))));
};

exports.default = Navbar;