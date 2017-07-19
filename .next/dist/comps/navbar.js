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


var Navbar = function Navbar(props) {
	return _react2.default.createElement("nav", { role: "navigation", className: "mastnav--container nd navsm nav", "data-is-full": props.isFull, "data-is-dark": props.isDark, __source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, _react2.default.createElement("div", { className: "mastnav mastnav--left", __source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement("a", { className: "nel masnav-home-link", href: "/", target: "_self", __source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, "\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08")), _react2.default.createElement("div", { className: "mastnav mastnav--right", __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement("ul", { className: "navbox-container", __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement(_link2.default, { prefetch: true, href: "/about", __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement("a", { className: "nel navbox-el", __source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, "About Me")), _react2.default.createElement(_link2.default, { href: "#main-project", __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement("a", { className: "nel navbox-el", "data-link-type": "projects", __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, "Projects")), _react2.default.createElement(_link2.default, { prefetch: true, href: "", __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, _react2.default.createElement("a", { className: "nel navbox-el", href: "/gallery", __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, "Gallery")), _react2.default.createElement(_link2.default, { prefetch: true, href: "", __source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, _react2.default.createElement("a", { className: "nel navbox-el cel", __source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, "Contact")))));
};

exports.default = Navbar;