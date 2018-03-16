"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function ErrorMessage(_ref) {
	var _ref$errMessage = _ref.errMessage,
	    errMessage = _ref$errMessage === undefined ? "invalid input" : _ref$errMessage,
	    _ref$placement = _ref.placement,
	    placement = _ref$placement === undefined ? "left" : _ref$placement;

	return errMessage !== false ? _react2.default.createElement(
		"div",
		{ className: "error-message " + placement },
		errMessage
	) : null;
};

exports.default = ErrorMessage;