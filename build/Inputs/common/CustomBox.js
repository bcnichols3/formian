'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unicodes = {
	onoff: '',
	checkbox: '\u2714'
};

var CustomBox = function CustomBox(props) {
	return _react2.default.createElement(
		'div',
		{ className: props.type + '-custom' },
		resolveIcon(props)
	);
};

exports.default = CustomBox;


function resolveIcon(props) {
	if (!props.icon) {
		return _react2.default.createElement(
			'div',
			{ className: 'custom-icon' },
			unicodes[props.type]
		);
	}
	if (props.icon instanceof Object) {
		return props.icon;
	}
	if (typeof props.icon === 'string' && props.icon.test(/^http?s/)) {
		return _react2.default.createElement('img', { className: 'custom-icon ' + name + '-custom-icon', src: props.icon });
	}
}