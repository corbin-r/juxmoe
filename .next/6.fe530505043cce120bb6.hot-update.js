webpackHotUpdate(6,{

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(562);

var _header2 = _interopRequireDefault(_header);

var _navbar = __webpack_require__(557);

var _navbar2 = _interopRequireDefault(_navbar);

var _aboutHeader = __webpack_require__(565);

var _aboutHeader2 = _interopRequireDefault(_aboutHeader);

var _containerLayout = __webpack_require__(566);

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
	}), _react2.default.createElement(_containerLayout2.default, { push: 'true', __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement('div', { className: 'hero-title-container title-talking-points col-full', __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement('div', { className: 'hero-point-container col-md', __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, _react2.default.createElement('h1', { className: 'hero-title-item', __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, 'Programmer'), _react2.default.createElement('h3', { className: 'hero-title-sub', __source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, '4 years experience working in', _react2.default.createElement('ul', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, '\u276F Node'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, '\u276F React'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, '\u276F Next')))), _react2.default.createElement('div', { className: 'hero-point-container col-md', __source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}, _react2.default.createElement('h1', { className: 'hero-title-item', __source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}, 'Designer'), _react2.default.createElement('h3', { className: 'hero-title-sub', __source: {
			fileName: _jsxFileName,
			lineNumber: 30
		}
	}, 'Skillful in', _react2.default.createElement('ul', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}, '\u276F Photoshop CC'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}, '\u276F Sketch')))), _react2.default.createElement('div', { className: 'hero-point-container col-md', __source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, _react2.default.createElement('h1', { className: 'hero-title-item', __source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}, 'Innovator'), _react2.default.createElement('h3', { className: 'hero-title-sub', __source: {
			fileName: _jsxFileName,
			lineNumber: 41
		}
	}, 'With a propensity towards', _react2.default.createElement('ul', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 43
		}
	}, _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 44
		}
	}, '\u276F Success driven design'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 45
		}
	}, '\u276F Always learning'), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 46
		}
	}, '\u276F Tackling problems head on'))))))), _react2.default.createElement('script', { src: '/static/blurtrans.js', __source: {
			fileName: _jsxFileName,
			lineNumber: 53
		}
	}));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/basedjux/Desktop/juxmoe/pages/about.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/basedjux/Desktop/juxmoe/pages/about.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(70)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5mZTUzMDUwNTA0M2NjZTEyMGJiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWJvdXQuanM/MWE3ZDcwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBzL2hlYWRlcidcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcHMvbmF2YmFyJ1xuaW1wb3J0IEFib3V0SGVhZGVyIGZyb20gJy4uL2NvbXBzL2Fib3V0L2Fib3V0LWhlYWRlcidcbmltcG9ydCBDb250YWluZXJMYXlvdXQgZnJvbSAnLi4vY29tcHMvY29udGFpbmVyLWxheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxIZWFkZXIgLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFzdGhlYWQtb3V0ZXItLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8TmF2YmFyIGlzRnVsbD1cInRydWVcIiBpc0Rhcms9XCJ0cnVlXCIgLz5cblx0XHRcdFx0PEFib3V0SGVhZGVyIC8+XG5cblx0XHRcdFx0PENvbnRhaW5lckxheW91dCBwdXNoPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVyby10aXRsZS1jb250YWluZXIgdGl0bGUtdGFsa2luZy1wb2ludHMgY29sLWZ1bGxcIj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZXJvLXBvaW50LWNvbnRhaW5lciBjb2wtbWRcIj5cblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImhlcm8tdGl0bGUtaXRlbVwiPlByb2dyYW1tZXI8L2gxPlxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiaGVyby10aXRsZS1zdWJcIj5cblx0XHRcdFx0XHRcdFx0XHQ0IHllYXJzIGV4cGVyaWVuY2Ugd29ya2luZyBpblxuXHRcdFx0XHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+4p2vIE5vZGU8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+4p2vIFJlYWN0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPuKdryBOZXh0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZXJvLXBvaW50LWNvbnRhaW5lciBjb2wtbWRcIj5cblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImhlcm8tdGl0bGUtaXRlbVwiPkRlc2lnbmVyPC9oMT5cblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImhlcm8tdGl0bGUtc3ViXCI+XG5cdFx0XHRcdFx0XHRcdFx0U2tpbGxmdWwgaW5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPuKdryBQaG90b3Nob3AgQ0M8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+4p2vIFNrZXRjaDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVyby1wb2ludC1jb250YWluZXIgY29sLW1kXCI+XG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJoZXJvLXRpdGxlLWl0ZW1cIj5Jbm5vdmF0b3I8L2gxPlxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiaGVyby10aXRsZS1zdWJcIj5cblx0XHRcdFx0XHRcdFx0XHRXaXRoIGEgcHJvcGVuc2l0eSB0b3dhcmRzXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT7ina8gU3VjY2VzcyBkcml2ZW4gZGVzaWduPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPuKdryBBbHdheXMgbGVhcm5pbmc8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+4p2vIFRhY2tsaW5nIHByb2JsZW1zIGhlYWQgb248L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9oMz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0NvbnRhaW5lckxheW91dD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHNjcmlwdCBzcmM9XCIvc3RhdGljL2JsdXJ0cmFucy5qc1wiPjwvc2NyaXB0PlxuXHQ8L2Rpdj5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2Fib3V0LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTs7QUEvQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==