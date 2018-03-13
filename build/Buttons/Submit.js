"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Submit = function Submit(_ref) {
	var disabled = _ref.disabled,
	    _ref$tabIndex = _ref.tabIndex,
	    tabIndex = _ref$tabIndex === undefined ? "0" : _ref$tabIndex,
	    _ref$className = _ref.className,
	    className = _ref$className === undefined ? "" : _ref$className,
	    text = _ref.text;
	return _react2.default.createElement(
		"div",
		{ className: "input-container submit " + className },
		_react2.default.createElement("input", {
			type: "submit",
			tabIndex: tabIndex,
			value: text ? text : "submit",
			disabled: disabled
		})
	);
};

exports.default = Submit;