'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../comps/header');

var _header2 = _interopRequireDefault(_header);

var _navbar = require('../comps/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _aboutHeader = require('../comps/about/about-header');

var _aboutHeader2 = _interopRequireDefault(_aboutHeader);

var _containerLayout = require('../comps/about/container-layout');

var _containerLayout2 = _interopRequireDefault(_containerLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/basedjux/Desktop/juxmoe/pages/about.js?entry';

exports.default = function () {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_header2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}), _react2.default.createElement('div', { className: 'masthead-outer--container', __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement(_navbar2.default, { isFull: 'true', isDark: 'true', __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}), _react2.default.createElement(_aboutHeader2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}), _react2.default.createElement(_containerLayout2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement('div', { className: 'hero-title-container col-full', __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}))), _react2.default.createElement('script', { src: '/static/blurtrans.js', __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}));
};