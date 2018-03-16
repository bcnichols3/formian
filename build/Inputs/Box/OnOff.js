'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OnOff = function OnOff(props) {
	return _react2.default.createElement(_Checkbox2.default, props);
};

OnOff.propTypes = {
	name: _propTypes2.default.string.isRequired
};

OnOff.defaultProps = {
	type: "onoff",
	required: false,
	errorText: false,
	onText: "on",
	offText: "off"
};

exports.default = OnOff;