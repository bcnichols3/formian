"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function Select(_ref) {
	var name = _ref.name,
	    _ref$tabIndex = _ref.tabIndex,
	    tabIndex = _ref$tabIndex === undefined ? "0" : _ref$tabIndex,
	    _ref$className = _ref.className,
	    className = _ref$className === undefined ? "" : _ref$className,
	    dataset = _ref.dataset,
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
	    errMessage = _ref$errMessage === undefined ? "Please select an option" : _ref$errMessage;
	return _react2.default.createElement(
		"div",
		{ className: "input-container select " + className },
		_react2.default.createElement(
			"label",
			{ htmlFor: name },
			text
		),
		_react2.default.createElement(
			"select",
			{
				id: name, type: "select",
				tabIndex: tabIndex,
				placeholder: placeholder,
				onChange: onChange,
				onBlur: onBlur,
				onFocus: onFocus,
				value: dataset[name]
			},
			options.map(function (opt) {
				return (typeof opt === "undefined" ? "undefined" : _typeof(opt)) === 'object' ? _react2.default.createElement("option", {
					key: opt.value,
					label: opt.label || opt.value,
					value: opt.value,
					disabled: opt.disabled || false
				}) : _react2.default.createElement("option", {
					key: opt,
					label: opt,
					value: opt
				});
			})
		),
		_react2.default.createElement(
			"div",
			{ className: "error-message" },
			errMessage
		)
	);
};

exports.default = Select;