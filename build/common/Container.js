'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref) {
	var type = _ref.type,
	    className = _ref.className,
	    style = _ref.style,
	    children = _ref.children;
	return _react2.default.createElement(
		'div',
		{ className: 'input-container ' + type + ' ' + className, style: style },
		children
	);
};

Container.defaultProps = {
	type: "text",
	classname: ""
};

exports.default = Container;