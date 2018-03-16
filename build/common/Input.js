'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _ErrorMessage = require('./ErrorMessage');

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(_ref) {
	var name = _ref.name,
	    position = _ref.position,
	    dataset = _ref.dataset,
	    style = _ref.style,
	    tabIndex = _ref.tabIndex,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    onFocus = _ref.onFocus,
	    type = _ref.type,
	    labelText = _ref.labelText,
	    placeholder = _ref.placeholder,
	    errorText = _ref.errorText,
	    className = _ref.className;
	return _react2.default.createElement(
		_Container2.default,
		{ type: type, className: 'field ' + className, style: style },
		_react2.default.createElement(
			'label',
			{ htmlFor: name },
			labelText || name
		),
		_react2.default.createElement('input', {
			id: name,
			type: type,
			tabIndex: tabIndex,
			placeholder: placeholder,
			onChange: onChange,
			onBlur: onBlur,
			onFocus: onFocus,
			value: dataset[name]
		}),
		_react2.default.createElement(_ErrorMessage2.default, { errorText: errorText, position: position })
	);
};

Input.defaultProps = {
	name: "text",
	type: "text",
	placeholder: "",
	errorText: "invalid input",
	className: "",
	tabIndex: "0"
};

exports.default = Input;