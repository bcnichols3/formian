'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OnOff = function OnOff(props) {
	var newProps = Object.assign({}, props, {
		name: props.name || "onoff",
		type: "onoff",
		required: props.required || false,
		errMessage: false
	});
	return _react2.default.createElement(_Checkbox2.default, newProps);
};

exports.default = OnOff;