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
	var disabled = _ref.disabled,
	    resetForm = _ref.resetForm,
	    tabIndex = _ref.tabIndex,
	    className = _ref.className,
	    style = _ref.style,
	    labelText = _ref.labelText,
	    value = _ref.value;

	if (disabled) className += " disabled";
	return _react2.default.createElement(
		_Container2.default,
		{ type: 'reset', className: className, style: style },
		_react2.default.createElement('input', {
			type: 'reset',
			onClick: resetForm,
			tabIndex: tabIndex,
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