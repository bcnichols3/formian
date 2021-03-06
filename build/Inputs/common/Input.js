'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(_ref) {
	var _ref$name = _ref.name,
	    name = _ref$name === undefined ? "text" : _ref$name,
	    dataset = _ref.dataset,
	    style = _ref.style,
	    _ref$tabIndex = _ref.tabIndex,
	    tabIndex = _ref$tabIndex === undefined ? "0" : _ref$tabIndex,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    onFocus = _ref.onFocus,
	    _ref$type = _ref.type,
	    type = _ref$type === undefined ? "text" : _ref$type,
	    _ref$text = _ref.text,
	    text = _ref$text === undefined ? name : _ref$text,
	    _ref$placeholder = _ref.placeholder,
	    placeholder = _ref$placeholder === undefined ? text : _ref$placeholder,
	    _ref$errMessage = _ref.errMessage,
	    errMessage = _ref$errMessage === undefined ? "invalid input" : _ref$errMessage,
	    _ref$className = _ref.className,
	    className = _ref$className === undefined ? "" : _ref$className;
	return _react2.default.createElement(
		_Container2.default,
		{ type: type, className: className, style: style },
		_react2.default.createElement(
			'label',
			{ htmlFor: name },
			text
		),
		_react2.default.createElement('input', {
			id: name, type: type,
			tabIndex: tabIndex,
			placeholder: placeholder,
			onChange: onChange,
			onBlur: onBlur,
			onFocus: onFocus,
			value: dataset[name]
		}),
		errMessage !== false ? _react2.default.createElement(
			'div',
			{ className: 'error-message' },
			errMessage
		) : null
	);
};

exports.default = Input;