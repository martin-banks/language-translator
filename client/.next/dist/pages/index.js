'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nav = require('../components/nav');

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