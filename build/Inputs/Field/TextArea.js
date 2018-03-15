'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('../../common/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextArea = function TextArea(props) {
	var newProps = Object.assign({}, props, {
		name: props.name || "textarea",
		placeholder: props.placeholder || "your message",
		errMessage: props.errMessage || "please enter a message"
	});
	return _react2.default.createElement(_Input2.default, _extends({
		type: 'textarea'
	}, newProps));
};

exports.default = TextArea;