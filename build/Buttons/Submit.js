'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../common/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Submit = function Submit(_ref) {
	var disabled = _ref.disabled,
	    style = _ref.style,
	    flagAllErrors = _ref.flagAllErrors,
	    _ref$tabIndex = _ref.tabIndex,
	    tabIndex = _ref$tabIndex === undefined ? "0" : _ref$tabIndex,
	    _ref$className = _ref.className,
	    className = _ref$className === undefined ? "" : _ref$className,
	    _ref$text = _ref.text,
	    text = _ref$text === undefined ? "submit" : _ref$text;

	if (disabled) className += ' disabled';
	return _react2.default.createElement(
		_Container2.default,
		{ type: 'submit', className: className, style: style },
		_react2.default.createElement('input', {
			type: 'submit',
			tabIndex: tabIndex,
			onFocus: flagAllErrors,
			value: text
		})
	);
};

exports.default = Submit;