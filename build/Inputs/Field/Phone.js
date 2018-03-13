'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Phone = function Phone(props) {
	var newProps = Object.assign({}, props, {
		name: props.name || "phone",
		type: "tel",
		placeholder: props.placeholder || "(123) 867-5309",
		errMessage: props.errMessage || "please enter a valid phone number"
	});
	return _react2.default.createElement(_Input2.default, newProps);
};

exports.default = Phone;