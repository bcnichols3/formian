'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CustomBox = require('../../common/CustomBox');

var _CustomBox2 = _interopRequireDefault(_CustomBox);

var _Container = require('../../common/Container');

var _Container2 = _interopRequireDefault(_Container);

var _ErrorMessage = require('../../common/ErrorMessage');

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(_ref) {
	var name = _ref.name,
	    type = _ref.type,
	    labelText = _ref.labelText,
	    errorText = _ref.errorText,
	    dataset = _ref.dataset,
	    defaultValue = _ref.defaultValue,
	    tabIndex = _ref.tabIndex,
	    onChange = _ref.onChange,
	    onFocus = _ref.onFocus,
	    onBlur = _ref.onBlur,
	    icon = _ref.icon,
	    style = _ref.style,
	    className = _ref.className,
	    position = _ref.position,
	    children = _ref.children;
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
				onChange: onChange,
				onFocus: onFocus,
				onBlur: onBlur,
				checked: !!dataset[name]
			}),
			_react2.default.createElement(_CustomBox2.default, { name: name, type: type, icon: icon }),
			_react2.default.createElement(
				'div',
				{ className: type + '-text' },
				children || labelText || name
			)
		),
		_react2.default.createElement(_ErrorMessage2.default, { errorText: errorText, position: position })
	);
};

Checkbox.propTypes = {
	name: _propTypes2.default.string.isRequired
};

Checkbox.defaultProps = {
	type: "checkbox",
	tabIndex: "0",
	defaultValue: false,
	errorText: "Please check to agree",
	className: ""
};

exports.default = Checkbox;