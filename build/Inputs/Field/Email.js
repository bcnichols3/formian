'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('../../common/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Email = function Email(props) {
	var newProps = Object.assign({}, props, {
		name: props.name || "email",
		type: "email",
		placeholder: props.placeholder || "email@address.com",
		errMessage: props.errMessage || "please enter a valid email address"
	});
	return _react2.default.createElement(_Input2.default, newProps);
};

exports.default = Email;