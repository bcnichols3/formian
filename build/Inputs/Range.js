'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../common/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Range = function Range(_ref) {
	var dataset = _ref.dataset,
	    _ref$tabIndex = _ref.tabIndex,
	    tabIndex = _ref$tabIndex === undefined ? "0" : _ref$tabIndex,
	    _ref$name = _ref.name,
	    name = _ref$name === undefined ? "range" : _ref$name,
	    _ref$className = _ref.className,
	    className = _ref$className === undefined ? "" : _ref$className,
	    style = _ref.style,
	    _ref$text = _ref.text,
	    text = _ref$text === undefined ? "choose a range" : _ref$text,
	    _ref$min = _ref.min,
	    min = _ref$min === undefined ? 0 : _ref$min,
	    _ref$max = _ref.max,
	    max = _ref$max === undefined ? 100 : _ref$max,
	    _ref$step = _ref.step,
	    step = _ref$step === undefined ? 1 : _ref$step,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    onFocus = _ref.onFocus,
	    _ref$defaultValue = _ref.defaultValue,
	    defaultValue = _ref$defaultValue === undefined ? min : _ref$defaultValue,
	    vertical = _ref.vertical;

	return _react2.default.createElement(
		_Container2.default,
		{ type: 'range', className: className, style: style },
		_react2.default.createElement(
			'label',
			{ htmlFor: name },
			text
		),
		_react2.default.createElement('input', {
			id: name, type: 'range',
			tabIndex: tabIndex,
			min: min, max: max, step: step,
			onChange: onChange,
			value: dataset[name]
		})
	);
};

exports.default = Range;