'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = function Option(_ref) {
	var data = _ref.data;
	return _react2.default.createElement('option', {
		label: data.label || data.value || data,
		value: data.value || data,
		disabled: data.disabled
	});
};

Option.propTypes = {
	data: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};

exports.default = Option;