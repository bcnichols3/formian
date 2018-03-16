'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGoogleRecaptcha = require('react-google-recaptcha');

var _reactGoogleRecaptcha2 = _interopRequireDefault(_reactGoogleRecaptcha);

var _Container = require('../../common/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Recaptcha = function Recaptcha(_ref) {
	var siteKey = _ref.siteKey,
	    _ref$tabIndex = _ref.tabIndex,
	    tabIndex = _ref$tabIndex === undefined ? "0" : _ref$tabIndex,
	    _ref$className = _ref.className,
	    className = _ref$className === undefined ? "" : _ref$className,
	    style = _ref.style,
	    onChange = _ref.onChange;
	return _react2.default.createElement(
		_Container2.default,
		{ type: 'recaptcha', className: className, style: style },
		_react2.default.createElement(_reactGoogleRecaptcha2.default, {
			id: 'recaptcha',
			tabIndex: tabIndex,
			sitekey: siteKey,
			onChange: onChange
		})
	);
};

exports.default = Recaptcha;