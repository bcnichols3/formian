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

var _Option = require('../../common/Option');

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function Select(_ref) {
	var name = _ref.name,
	    type = _ref.type,
	    labelText = _ref.labelText,
	    errorText = _ref.errorText,
	    placeholder = _ref.placeholder,
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
		_Container2.default,
		{ type: 'select', className: className, style: style },
		_react2.default.createElement(
			'label',
			{ htmlFor: name },
			labelText || name
		),
		_react2.default.createElement(
			'select',
			{
				id: name, type: type,
				tabIndex: tabIndex,
				placeholder: placeholder,
				onChange: onChange,
				onBlur: onBlur,
				onFocus: onFocus,
				value: dataset[name]
			},
			options.map(function (data) {
				return _react2.default.createElement(_Option2.default, { key: data.value || data, data: data });
			})
		),
		_react2.default.createElement(_CustomBox2.default, { name: name, type: 'select', icon: icon }),
		_react2.default.createElement(_ErrorMessage2.default, { errorText: errorText, position: position })
	);
};

Select.propTypes = {
	name: _propTypes2.default.string.isRequired,
	options: _propTypes2.default.array.isRequired
};

Select.defaultProps = {
	type: "select",
	defaultValue: 0,
	tabIndex: "0",
	placeholder: "",
	errorText: "Please select an option",
	className: ""
};

exports.default = Select;