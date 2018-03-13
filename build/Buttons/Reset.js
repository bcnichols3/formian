"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Reset = function Reset(_ref) {
	var disabled = _ref.disabled,
	    _ref$tabIndex = _ref.tabIndex,
	    tabIndex = _ref$tabIndex === undefined ? "0" : _ref$tabIndex,
	    _ref$className = _ref.className,
	    className = _ref$className === undefined ? "" : _ref$className,
	    text = _ref.text;
	return _react2.default.createElement(
		"div",
		{ className: "input-container reset " + className },
		_react2.default.createElement("input", {
			type: "reset",
			tabIndex: tabIndex,
			value: text ? text : "restore defaults",
			disabled: disabled
		})
	);
};

exports.default = Reset;