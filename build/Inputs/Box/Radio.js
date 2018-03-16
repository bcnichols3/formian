'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../../common/Container');

var _Container2 = _interopRequireDefault(_Container);

var _CustomBox = require('../../common/CustomBox');

var _CustomBox2 = _interopRequireDefault(_CustomBox);

var _ErrorMessage = require('../../common/ErrorMessage');

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function Radio(_ref) {
	var name = _ref.name,
	    _ref$className = _ref.className,
	    className = _ref$className === undefined ? "" : _ref$className,
	    _ref$text = _ref.text,
	    text = _ref$text === undefined ? name : _ref$text,
	    _ref$tabIndex = _ref.tabIndex,
	    tabIndex = _ref$tabIndex === undefined ? "0" : _ref$tabIndex,
	    icon = _ref.icon,
	    onChange = _ref.onChange,
	    onFocus = _ref.onFocus,
	    onBlur = _ref.onBlur,
	    children = _ref.children,
	    style = _ref.style,
	    dataset = _ref.dataset,
	    _ref$options = _ref.options,
	    options = _ref$options === undefined ? ['option1', 'option2'] : _ref$options,
	    _ref$defaultValue = _ref.defaultValue,
	    defaultValue = _ref$defaultValue === undefined ? options[0] : _ref$defaultValue,
	    _ref$type = _ref.type,
	    type = _ref$type === undefined ? "radio" : _ref$type,
	    position = _ref.position,
	    _ref$errMessage = _ref.errMessage,
	    errMessage = _ref$errMessage === undefined ? "Please select an option" : _ref$errMessage;
	return _react2.default.createElement(
		'fieldset',
		{ id: name, name: name },
		_react2.default.createElement(
			'legend',
			null,
			text
		),
		options.map(function (option) {
			return _react2.default.createElement(
				_Container2.default,
				{ key: option, type: type, className: className, style: style },
				_react2.default.createElement(
					'label',
					{ htmlFor: option + '@@' + name },
					_react2.default.createElement('input', {
						id: option + '@@' + name, type: type,
						tabIndex: tabIndex,
						name: name,
						value: option,
						checked: dataset[name] === option,
						onChange: onChange,
						onBlur: onBlur,
						onFocus: onFocus
					}),
					_react2.default.createElement(
						_CustomBox2.default,
						{ name: name, type: type, icon: icon },
						_react2.default.createElement(
							'div',
							{ className: 'radio-text' },
							option
						)
					)
				)
			);
		}),
		_react2.default.createElement(_ErrorMessage2.default, { errMessage: errMessage, position: position })
	);
};

exports.default = Radio;