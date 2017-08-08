'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uiNavbar = require('../comps/ui-navbar');

var _uiNavbar2 = _interopRequireDefault(_uiNavbar);

var _introHero = require('../comps/intro-hero');

var _introHero2 = _interopRequireDefault(_introHero);

var _header = require('../comps/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/basedjux/Desktop/juxmoe/pages/index.js?entry';

exports.default = function () {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement(_header2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}), _react2.default.createElement(_uiNavbar2.default, { isFull: 'false', isDark: 'false', __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}), _react2.default.createElement(_introHero2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}), _react2.default.createElement('div', { className: 'masthead-container-full mast-project--main col-full', id: 'main-project', 'data-force-color': 'hyperline', __source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, _react2.default.createElement('div', { className: 'masthead-project-title', __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement('h1', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, 'Main Project I work on')), _react2.default.createElement('div', { className: 'masthead-content-project content-card content-popout-massive', __source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, _react2.default.createElement('div', { className: 'prev-project-img', __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, _react2.default.createElement('img', { src: '/static/i/hyperline.png', __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	})), _react2.default.createElement('div', { className: 'project-intro-right', __source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, _react2.default.createElement('h5', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, 'Hyperline')), _react2.default.createElement('div', { className: 'project-intro-expo', __source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, 'I am a core contributor to Hyperline, a HyperJS plugin, primarily written in JS and React.'), _react2.default.createElement('div', { className: 'core-button out-of-site-link center-in-container', __source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}, _react2.default.createElement('a', { target: '_self', className: 'page-link-bright has--core-anim', href: 'https://github.com/hyperline/hyperline', __source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}, 'Check it out'))))), _react2.default.createElement('script', { type: 'text/javascript', src: '/static/introworker.js', __source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}));
};