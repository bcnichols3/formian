"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function Radio(_ref) {
	var name = _ref.name,
	    _ref$className = _ref.className,
	    className = _ref$className === undefined ? "" : _ref$className,
	    _ref$text = _ref.text,
	    text = _ref$text === undefined ? name : _ref$text,
	    _ref$tabIndex = _ref.tabIndex,
	    tabIndex = _ref$tabIndex === undefined ? "0" : _ref$tabIndex,
	    icon = _ref.icon,
	    onChange = _ref.onChange,
	    onFocus = _ref.onFocus,
	    onBlur = _ref.onBlur,
	    children = _ref.children,
	    dataset = _ref.dataset,
	    _ref$options = _ref.options,
	    options = _ref$options === undefined ? ['option1', 'option2'] : _ref$options,
	    defaultValue = _ref.defaultValue,
	    _ref$type = _ref.type,
	    type = _ref$type === undefined ? "radio" : _ref$type,
	    _ref$errMessage = _ref.errMessage,
	    errMessage = _ref$errMessage === undefined ? "Please select an option" : _ref$errMessage;
	return _react2.default.createElement(
		"fieldset",
		{ id: name, name: name },
		_react2.default.createElement(
			"legend",
			null,
			text
		),
		options.map(function (option) {
			return _react2.default.createElement(
				"div",
				{ key: option, className: "input-container radio " + className },
				_react2.default.createElement(
					"label",
					{ htmlFor: option + '@@' + name },
					_react2.default.createElement("input", {
						id: option + '@@' + name, type: type,
						tabIndex: tabIndex,
						name: name,
						value: option,
						onChange: onChange,
						onBlur: onBlur,
						onFocus: onFocus,
						checked: dataset[name] === option
					}),
					_react2.default.createElement(
						"div",
						{ className: "radio-custom" },
						_react2.default.createElement(
							"div",
							{ className: "custom-icon" },
							''
						),
						_react2.default.createElement(
							"div",
							{ className: "radio-text" },
							children || option
						)
					)
				)
			);
		}),
		errMessage !== false ? _react2.default.createElement(
			"div",
			{ className: "error-message" },
			errMessage
		) : null
	);
};

exports.default = Radio;