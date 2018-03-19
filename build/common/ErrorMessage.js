'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function ErrorMessage(_ref) {
	var errorText = _ref.errorText,
	    placement = _ref.placement;

	return errorText !== false ? _react2.default.createElement(
		'div',
		{ className: 'error-message ' + placement },
		errorText
	) : null;
};

ErrorMessage.defaultProps = {
	errorText: "invalid input",
	placement: "left"
};

exports.default = ErrorMessage;