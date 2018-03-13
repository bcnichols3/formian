'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Number = function Number(props) {
	var newProps = Object.assign({}, props, {
		name: props.name || "number",
		placeholder: props.placeholder || "number",
		errMessage: props.errMessage || "Please enter a number",
		wheel: props.wheel || false
	});
	return _react2.default.createElement(_Input2.default, _extends({
		className: 'number ' + (!newProps.wheel ? 'number-no-wheel' : ''),
		type: 'number'
	}, newProps));
};

exports.default = Number;