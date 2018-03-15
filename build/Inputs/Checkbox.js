'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CustomBox = require('../common/CustomBox');

var _CustomBox2 = _interopRequireDefault(_CustomBox);

var _Container = require('../common/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(_ref) {
	var name = _ref.name,
	    _ref$tabIndex = _ref.tabIndex,
	    tabIndex = _ref$tabIndex === undefined ? "0" : _ref$tabIndex,
	    icon = _ref.icon,
	    _ref$className = _ref.className,
	    className = _ref$className === undefined ? "" : _ref$className,
	    onChange = _ref.onChange,
	    style = _ref.style,
	    _ref$defaultValue = _ref.defaultValue,
	    defaultValue = _ref$defaultValue === undefined ? false : _ref$defaultValue,
	    _ref$type = _ref.type,
	    type = _ref$type === undefined ? "checkbox" : _ref$type,
	    _ref$text = _ref.text,
	    text = _ref$text === undefined ? name : _ref$text,
	    children = _ref.children,
	    _ref$value = _ref.value,
	    value = _ref$value === undefined ? name : _ref$value,
	    _ref$errMessage = _ref.errMessage,
	    errMessage = _ref$errMessage === undefined ? "Please check to agree" : _ref$errMessage,
	    dataset = _ref.dataset;
	return _react2.default.createElement(
		_Container2.default,
		{ type: type, className: className, style: style },
		_react2.default.createElement(
			'label',
			{ htmlFor: name },
			_react2.default.createElement('input', {
				tabIndex: tabIndex,
				id: name, type: 'checkbox',
				name: name,
				value: value,
				onChange: onChange,
				checked: Array.isArray(dataset) ? dataset.includes(value) : !!dataset[value]
			}),
			_react2.default.createElement(_CustomBox2.default, {
				name: name, type: type, icon: icon, tabIndex: tabIndex
			}),
			_react2.default.createElement(
				'div',
				{ className: type + '-text' },
				children || text
			)
		),
		errMessage !== false ? _react2.default.createElement(
			'div',
			{ className: 'error-message' },
			errMessage
		) : null
	);
};

exports.default = Checkbox;