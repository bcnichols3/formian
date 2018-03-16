'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = require('../../common/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Range = function Range(_ref) {
	var name = _ref.name,
	    type = _ref.type,
	    labelText = _ref.labelText,
	    dataset = _ref.dataset,
	    tabIndex = _ref.tabIndex,
	    min = _ref.min,
	    max = _ref.max,
	    step = _ref.step,
	    onChange = _ref.onChange,
	    onFocus = _ref.onFocus,
	    onBlur = _ref.onBlur,
	    icon = _ref.icon,
	    style = _ref.style,
	    className = _ref.className,
	    position = _ref.position,
	    vertical = _ref.vertical;

	return _react2.default.createElement(
		_Container2.default,
		{ type: type, className: className, style: style },
		_react2.default.createElement(
			'label',
			{ htmlFor: name },
			labelText || name
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

Range.propTypes = {
	min: _propTypes2.default.number,
	max: _propTypes2.default.number,
	step: _propTypes2.default.number
};

Range.defaultProps = {
	type: "range",
	min: 0,
	max: 100,
	step: 1,
	defaultValue: 50,
	tabIndex: "0",
	options: ['option 1', 'option 2'],
	className: ""
};

exports.default = Range;