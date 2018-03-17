'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../common/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Reset = function Reset(_ref) {
	var labelText = _ref.labelText,
	    value = _ref.value,
	    disabled = _ref.disabled,
	    tabIndex = _ref.tabIndex,
	    resetForm = _ref.resetForm,
	    style = _ref.style,
	    className = _ref.className,
	    position = _ref.position;

	if (disabled) className += " disabled";
	return _react2.default.createElement(
		_Container2.default,
		{ type: 'reset', className: className, style: style },
		_react2.default.createElement('input', {
			type: 'button',
			tabIndex: tabIndex,
			onClick: resetForm,
			disabled: disabled,
			value: labelText || value
		})
	);
};

Reset.defaultProps = {
	disabled: true,
	tabIndex: "0",
	value: "submit",
	labelText: "restore defaults",
	className: ""
};

exports.default = Reset;