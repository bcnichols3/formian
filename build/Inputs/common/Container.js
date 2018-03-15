"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref) {
	var _ref$type = _ref.type,
	    type = _ref$type === undefined ? "text" : _ref$type,
	    _ref$className = _ref.className,
	    className = _ref$className === undefined ? "" : _ref$className,
	    _ref$style = _ref.style,
	    style = _ref$style === undefined ? {} : _ref$style,
	    children = _ref.children;
	return _react2.default.createElement(
		"div",
		{ className: "input-container " + type + " " + className, style: style },
		children
	);
};

exports.default = Container;