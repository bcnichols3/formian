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

var _CustomBox = require('../../common/CustomBox');

var _CustomBox2 = _interopRequireDefault(_CustomBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OnOff = function OnOff(_ref) {
	var name = _ref.name,
	    type = _ref.type,
	    labelText = _ref.labelText,
	    onText = _ref.onText,
	    offText = _ref.offText,
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
				id: name, type: 'checkbox',
				name: name,
				tabIndex: tabIndex,
				checked: !!dataset[name],
				onChange: onChange,
				onBlur: onBlur,
				onFocus: onFocus
			}),
			_react2.default.createElement(
				'div',
				{ className: type + '-custom' },
				_react2.default.createElement(
					'div',
					{ className: 'onoff-custom-wrapper' },
					_react2.default.createElement(
						'div',
						{ className: 'on-text' },
						onText
					),
					_react2.default.createElement('div', { className: 'custom-icon' }),
					_react2.default.createElement(
						'div',
						{ className: 'off-text' },
						offText
					)
				)
			),
			_react2.default.createElement(
				'div',
				{ className: type + '-text' },
				children || labelText || name
			)
		)
	);
};

OnOff.propTypes = {
	name: _propTypes2.default.string.isRequired
};

OnOff.defaultProps = {
	type: "onoff",
	required: false,
	defaultValue: false,
	className: "",
	onText: "on",
	offText: "off"
};

exports.default = OnOff;