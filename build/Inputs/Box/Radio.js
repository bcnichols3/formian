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

var _ErrorMessage = require('../../common/ErrorMessage');

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

var _Fieldset = require('../../common/Fieldset');

var _Fieldset2 = _interopRequireDefault(_Fieldset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function Radio(_ref) {
	var name = _ref.name,
	    type = _ref.type,
	    labelText = _ref.labelText,
	    errorText = _ref.errorText,
	    dataset = _ref.dataset,
	    options = _ref.options,
	    tabIndex = _ref.tabIndex,
	    onChange = _ref.onChange,
	    onFocus = _ref.onFocus,
	    onBlur = _ref.onBlur,
	    icon = _ref.icon,
	    style = _ref.style,
	    className = _ref.className,
	    position = _ref.position;
	return _react2.default.createElement(
		_Fieldset2.default,
		{ name: name, labelText: labelText, className: type },
		options.map(function (option) {
			return _react2.default.createElement(
				_Container2.default,
				{ key: option, type: type, className: className, style: style },
				_react2.default.createElement(
					'label',
					{ htmlFor: option + '@@' + name },
					_react2.default.createElement('input', {
						id: option + '@@' + name, type: 'radio',
						name: name,
						tabIndex: tabIndex,
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
		_react2.default.createElement(_ErrorMessage2.default, { errorText: errorText, position: position })
	);
};

Radio.propTypes = {
	name: _propTypes2.default.string.isRequired,
	options: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired
};

Radio.defaultProps = {
	type: "radio",
	tabIndex: "0",
	options: ['option1', 'option2'],
	defaultValue: 0,
	errorText: "Please select an option",
	className: ""
};

exports.default = Radio;