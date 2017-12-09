webpackHotUpdate(5,{

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _nav = __webpack_require__(393);

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/martinbanks/gitHubProjects/language-translator/client/pages/index.js?entry';


var myComponent = function (_React$Component) {
	(0, _inherits3.default)(myComponent, _React$Component);

	function myComponent(props) {
		(0, _classCallCheck3.default)(this, myComponent);

		var _this = (0, _possibleConstructorReturn3.default)(this, (myComponent.__proto__ || (0, _getPrototypeOf2.default)(myComponent)).call(this, props));

		_this.state = {
			languages: null
		};
		return _this;
	}

	(0, _createClass3.default)(myComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({ languages: _react2.default.createElement('h1', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 16
					}
				}, 'Hi there') });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', { className: 'app', __source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			}, _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}, 'something'), this.state.languages);
		}
	}]);

	return myComponent;
}(_react2.default.Component);

exports.default = myComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2IiwibXlDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlIiwibGFuZ3VhZ2VzIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQU8sQUFBUzs7Ozs7Ozs7O0lBSVYsQTtzQ0FDTDs7c0JBQUEsQUFBWSxPQUFPO3NDQUFBOzs4SUFBQSxBQUNaLEFBQ047O1FBQUEsQUFBSztjQUZhLEFBRWxCLEFBQWEsQUFDRDtBQURDLEFBQ1o7U0FFRDs7Ozs7c0NBRW1CLEFBQ25CO1FBQUEsQUFBSyxTQUFTLEVBQUUsMkJBQVcsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQUEsRUFBM0IsQUFBYyxBQUFhLEFBQzNCOzs7OzJCQUNRLEFBQ1I7MEJBQU8sY0FBQSxTQUFLLFdBQUwsQUFBZTtlQUFmO2lCQUFBLEFBQ047QUFETTtJQUFBLGtCQUNOLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BRE0sQUFDTixBQUNFLG1CQUFBLEFBQUssTUFGUixBQUFPLEFBRU8sQUFFZDs7Ozs7RUFoQndCLGdCQUFNLEEsQUFtQmhDOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJ0aW5iYW5rcy9naXRIdWJQcm9qZWN0cy9sYW5ndWFnZS10cmFuc2xhdG9yL2NsaWVudCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/martinbanks/gitHubProjects/language-translator/client/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martinbanks/gitHubProjects/language-translator/client/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jZjc0MDU0YTQ4M2MzZDRlOTJmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MWFhN2NjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYnXG5cblxuXG5jbGFzcyBteUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGxhbmd1YWdlczogbnVsbFxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBsYW5ndWFnZXM6IDxoMT5IaSB0aGVyZTwvaDE+IH0pXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuXHRcdFx0PHA+c29tZXRoaW5nPC9wPlxuXHRcdFx0eyB0aGlzLnN0YXRlLmxhbmd1YWdlcyB9XG5cdFx0PC9kaXY+XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbXlDb21wb25lbnRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBR0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFiQTtBQUNBO0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=