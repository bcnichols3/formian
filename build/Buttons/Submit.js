'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = require('../common/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Submit = function Submit(_ref) {
	var labelText = _ref.labelText,
	    value = _ref.value,
	    disabled = _ref.disabled,
	    tabIndex = _ref.tabIndex,
	    flagAllErrors = _ref.flagAllErrors,
	    style = _ref.style,
	    className = _ref.className,
	    position = _ref.position;

	if (disabled) className += ' disabled';
	return _react2.default.createElement(
		_Container2.default,
		{ type: 'submit', className: className, style: style },
		_react2.default.createElement('input', {
			type: 'submit',
			tabIndex: tabIndex,
			onClick: flagAllErrors,
			value: labelText || value
		})
	);
};

Submit.defaultProps = {
	type: "submit",
	disabled: true,
	tabIndex: "0",
	value: "submit",
	labelText: "submit",
	className: ""
};

exports.default = Submit;