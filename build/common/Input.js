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
	    type = _ref.type,
	    labelText = _ref.labelText,
	    placeholder = _ref.placeholder,
	    errorText = _ref.errorText,
	    dataset = _ref.dataset,
	    tabIndex = _ref.tabIndex,
	    readOnly = _ref.readOnly,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    onFocus = _ref.onFocus,
	    autoComplete = _ref.autoComplete,
	    inputMode = _ref.inputMode,
	    style = _ref.style,
	    className = _ref.className,
	    position = _ref.position;
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
			inputMode: inputMode,
			tabIndex: tabIndex,
			placeholder: placeholder,
			readOnly: readOnly,
			onChange: onChange,
			onBlur: onBlur,
			autoComplete: autoComplete,
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
	autoComplete: "on",
	errorText: "invalid input",
	className: "",
	tabIndex: "0"
};

exports.default = Input;