'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../../common/Container');

var _Container2 = _interopRequireDefault(_Container);

var _CustomBox = require('../../common/CustomBox');

var _CustomBox2 = _interopRequireDefault(_CustomBox);

var _ErrorMessage = require('../../common/ErrorMessage');

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function Select(_ref) {
	var name = _ref.name,
	    _ref$type = _ref.type,
	    type = _ref$type === undefined ? "select" : _ref$type,
	    icon = _ref.icon,
	    _ref$tabIndex = _ref.tabIndex,
	    tabIndex = _ref$tabIndex === undefined ? "0" : _ref$tabIndex,
	    _ref$className = _ref.className,
	    className = _ref$className === undefined ? "" : _ref$className,
	    style = _ref.style,
	    dataset = _ref.dataset,
	    position = _ref.position,
	    _ref$options = _ref.options,
	    options = _ref$options === undefined ? ['enter options array'] : _ref$options,
	    defaultValue = _ref.defaultValue,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    onFocus = _ref.onFocus,
	    _ref$text = _ref.text,
	    text = _ref$text === undefined ? name : _ref$text,
	    _ref$placeholder = _ref.placeholder,
	    placeholder = _ref$placeholder === undefined ? text : _ref$placeholder,
	    _ref$errMessage = _ref.errMessage,
	    errMessage = _ref$errMessage === undefined ? "please select an option" : _ref$errMessage;
	return _react2.default.createElement(
		_Container2.default,
		{ type: 'select', className: className, style: style },
		_react2.default.createElement(
			'label',
			{ htmlFor: name },
			text
		),
		_react2.default.createElement(
			'select',
			{
				id: name, type: type,
				tabIndex: tabIndex,
				placeholder: placeholder,
				onChange: onChange,
				onBlur: onBlur,
				onFocus: onFocus,
				value: dataset[name]
			},
			options.map(function (opt) {
				return (typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object' ? _react2.default.createElement('option', {
					key: opt.value,
					label: opt.label || opt.value,
					value: opt.value,
					disabled: opt.disabled || false
				}) : _react2.default.createElement('option', {
					key: opt,
					label: opt,
					value: opt
				});
			})
		),
		_react2.default.createElement(_CustomBox2.default, { name: name, type: type, icon: icon }),
		_react2.default.createElement(_ErrorMessage2.default, { errMessage: errMessage, position: position })
	);
};

exports.default = Select;