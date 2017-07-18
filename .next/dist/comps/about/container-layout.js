'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/basedjux/Desktop/juxmoe/comps/about/container-layout.js';

var layoutStyle = {
	margin: '0 auto',
	padding: '0 20px',
	zIndex: '8'
};

var ContainerLayout = function ContainerLayout(props) {
	return _react2.default.createElement('div', { className: 'next-container-layout col-xlg', style: layoutStyle, 'data-push': props.push, __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, props.children);
};

exports.default = ContainerLayout;