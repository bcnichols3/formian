'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require('../../common/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Url = function Url(props) {
	return _react2.default.createElement(_Input2.default, _extends({ type: 'url' }, props, { className: props.className + " url" }));
};

Url.defaultProps = {
	name: "url",
	autoComplete: "url",
	placeholder: "http://www.example.com",
	errorText: "Please enter a valid web address"
};

exports.default = Url;