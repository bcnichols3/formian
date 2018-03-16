"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function ErrorMessage(_ref) {
	var _ref$errorText = _ref.errorText,
	    errorText = _ref$errorText === undefined ? "invalid input" : _ref$errorText,
	    _ref$placement = _ref.placement,
	    placement = _ref$placement === undefined ? "left" : _ref$placement;

	return errorText !== false ? _react2.default.createElement(
		"div",
		{ className: "error-message " + placement },
		errorText
	) : null;
};

exports.default = ErrorMessage;