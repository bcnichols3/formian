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

var _ErrorMessage = require('../../common/ErrorMessage');

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var File = function File(_ref) {
	var name = _ref.name,
	    type = _ref.type,
	    labelText = _ref.labelText,
	    errorText = _ref.errorText,
	    placeholder = _ref.placeholder,
	    dataset = _ref.dataset,
	    accept = _ref.accept,
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
		{ type: type, className: className, style: style },
		_react2.default.createElement(
			'label',
			{ htmlFor: name },
			labelText || name
		),
		_react2.default.createElement('input', {
			id: name,
			type: 'file',
			tabIndex: tabIndex,
			placeholder: placeholder,
			accept: accept,
			onChange: onChange,
			onBlur: onBlur,
			onFocus: onFocus
		}),
		_react2.default.createElement(
			'div',
			{ className: 'file-preview' },
			dataset[name] || "No file selected"
		),
		_react2.default.createElement(_ErrorMessage2.default, { errorText: errorText, position: position })
	);
};

File.defaultProps = {
	name: "file",
	type: "file",
	accept: "",
	labelText: "Upload an attachment",
	errorText: "invalid file",
	className: "",
	tabIndex: "0"
};

exports.default = File;


function fileSize(num) {
	if (num < 1024) return num + ' bytes';else if (num > 1024 && num < 1048576) return (num / 1024).toFixed(1) + 'KB';else if (num > 1048576) return (num / 1048576).toFixed(1) + 'MB';
}