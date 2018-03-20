'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _injectCSS = require('./injectCSS');

var _injectCSS2 = _interopRequireDefault(_injectCSS);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _validators = require('./validators');

var _validators2 = _interopRequireDefault(_validators);

var _formatters = require('./formatters');

var _formatters2 = _interopRequireDefault(_formatters);

var _Reset = require('./Buttons/Reset');

var _Reset2 = _interopRequireDefault(_Reset);

var _Submit = require('./Buttons/Submit');

var _Submit2 = _interopRequireDefault(_Submit);

var _Fieldset = require('./common/Fieldset');

var _Fieldset2 = _interopRequireDefault(_Fieldset);

var _Inputs = require('./Inputs');

var _Inputs2 = _interopRequireDefault(_Inputs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recaptcha = _Inputs2.default[_Inputs2.default.length - 1];

var Form = function (_Component) {
	_inherits(Form, _Component);

	function Form(props) {
		_classCallCheck(this, Form);

		var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

		_this.mapInputsToState = _this.mapInputsToState.bind(_this);
		_this.addHandlersToChild = _this.addHandlersToChild.bind(_this);
		_this.setCheckersForChild = _this.setCheckersForChild.bind(_this);
		_this.renderChildren = _this.renderChildren.bind(_this);
		_this.autoSubmit = _this.autoSubmit.bind(_this);

		_this.onChange = _this.onChange.bind(_this);
		_this.onBlur = _this.onBlur.bind(_this);
		_this.onFocus = _this.onFocus.bind(_this);
		_this.recaptcha = _this.recaptcha.bind(_this);

		_this.flagAllErrors = _this.flagAllErrors.bind(_this);
		_this.resetForm = _this.resetForm.bind(_this);
		_this.isDefaultState = _this.isDefaultState.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);

		_this.formatters = _formatters2.default;
		_this.validators = _validators2.default;

		if (props.customStyles !== false) (0, _injectCSS2.default)();

		_this.initialState = { disabled: true, formData: {} };
		_this.mapInputsToState(props.children);
		_this.formDataKeys = Object.keys(_this.initialState.formData);
		_this.state = Object.assign({}, _this.initialState);
		return _this;
	}

	_createClass(Form, [{
		key: 'mapInputsToState',
		value: function mapInputsToState(children) {
			var _this2 = this;

			_react.Children.map(children, function (child) {
				if (!child) return;else if (child.type === Recaptcha) {
					_this2.initialState.formData.recaptcha = false;
				} else if (child.type === _Fieldset2.default || child.type === 'fieldset') {
					_this2.mapInputsToState(child.props.children);
				} else if (_Inputs2.default.includes(child.type)) {
					// discover the dataset object key
					var key = child.props.name || child.type.name.toLowerCase();
					// set prevalidated for marked inputs; otherwise set an appropriate validator function
					if (child.props.required === false || child.props.required === 'false') {
						_this2.validators[key] = _this2.validators.prevalidated;
					} else {
						_this2.setCheckersForChild(child, 'validators');
					}
					_this2.setCheckersForChild(child, 'formatters');

					// create initial state
					var target = {};
					if (child.props.options) {
						target.value = child.props.options[child.props.defaultValue] || child.props.options[0];
					} else {
						target.value = child.props.defaultValue || '';
					}
					target.checked = child.props.defaultValue || '';

					_this2.initialState.formData[key] = _this2.formatters[key](target);
				}
			});
		}
	}, {
		key: 'setCheckersForChild',
		value: function setCheckersForChild(child, set) {
			var key = child.props.name || child.type.name;

			if (!child.props[set] && child.props.tinyInt) {
				this[set][key] = this[set].tinyInt;
				child.props.defaultValue = child.props.defaultValue || 0;
			} else {
				this[set][key] = child.props[set] // custom checker
				|| this[set][key.toLowerCase()] // checker by field name
				|| this[set][child.type.name.toLowerCase()] // checker by type name
				|| this[set][child.props.type.toLowerCase()] // checker by type
				;
			}
		}
	}, {
		key: 'addHandlersToChild',
		value: function addHandlersToChild(child, tabIndex) {
			if (_Inputs2.default.includes(child.type)) {
				return _react2.default.cloneElement(child, {
					tabIndex: tabIndex,
					onChange: child.type === Recaptcha ? this.recaptcha : this.onChange,
					onBlur: this.onBlur,
					onFocus: this.onFocus,
					dataset: this.state.formData,
					required: child.required || true
				});
			}
			if (child.type === _Submit2.default) {
				return _react2.default.cloneElement(child, {
					tabIndex: tabIndex,
					disabled: this.state.disabled,
					flagAllErrors: this.flagAllErrors
				});
			}
			if (child.type === _Reset2.default) {
				return _react2.default.cloneElement(child, {
					tabIndex: tabIndex,
					disabled: this.isDefaultState(),
					resetForm: this.resetForm
				});
			}
			return child;
		}
	}, {
		key: 'renderChildren',
		value: function renderChildren() {
			var _this3 = this;

			var tabIndex = 1;
			return _react.Children.map(this.props.children, function (child) {
				if (!child) return;
				if (child.type === _Fieldset2.default || child.type === 'fieldset') {
					return _react2.default.cloneElement(child, {
						children: _react.Children.map(child.props.children, function (child) {
							return _this3.addHandlersToChild(child, tabIndex++);
						})
					});
				}
				if (_Inputs2.default.includes(child.type)) {
					return _this3.addHandlersToChild(child, tabIndex++);
				}
				return child;
			});
		}
	}, {
		key: 'isDefaultState',
		value: function isDefaultState() {
			for (var i = 0; i < this.formDataKeys.length; i++) {
				if (this.initialState.formData[this.formDataKeys[i]] !== this.state.formData[this.formDataKeys[i]]) {
					return false;
				}
			}
			return true;
		}
	}, {
		key: 'onChange',
		value: function onChange(evt) {
			var key = evt.target.id;
			if (evt.target.type === 'radio') key = key.split('@@')[1];
			var formData = Object.assign({}, this.state.formData, _defineProperty({}, key, this.formatters[key] ? this.formatters[key](evt.target) : evt.target.value));

			this.checkForm(formData);

			if (this.props.submitOnChange) this.autoSubmit();
		}

		// if left field with an error, flag it

	}, {
		key: 'onBlur',
		value: function onBlur(evt) {
			var formData = this.state.formData;

			var key = evt.target.id;
			var data = formData[key];

			if (this.validators[key] && !this.validators[key](formData[key])) {
				evt.target.classList.add('error');
				evt.target.nextSibling.classList.add('error');
			}
		}

		// if focusing on an err'd field, clear the ErrorPage

	}, {
		key: 'onFocus',
		value: function onFocus(evt) {
			evt.target.classList.remove('error');
			evt.target.nextSibling.classList.remove('error');
		}
	}, {
		key: 'onSubmit',
		value: function onSubmit(evt) {
			evt.preventDefault();
			if (this.state.disabled) this.flagAllErrors();else this.props.onSubmit.call(this, this.state.formData);
		}
	}, {
		key: 'recaptcha',
		value: function recaptcha(value) {
			var formData = Object.assign({}, this.state.formData, { recaptcha: value });

			this.checkForm(formData);
		}
	}, {
		key: 'checkForm',
		value: function checkForm(formData) {
			var disabled = false;
			var key = void 0;
			for (var i = 0; i < this.formDataKeys.length; i++) {
				key = this.formDataKeys[i];
				if (this.validators[key] && !this.validators[key](formData[key])) {
					disabled = true;
					break;
				}
			}
			this.setState({ disabled: disabled, formData: formData });
		}
	}, {
		key: 'resetForm',
		value: function resetForm(evt) {
			evt.preventDefault();
			this.setState(Object.assign({}, this.initialState));
			for (var i = 0; i < this.formDataKeys.length; i++) {
				document.getElementById(this.formDataKeys[i]).dispatchEvent(new Event('blur'));
			}
		}
	}, {
		key: 'flagAllErrors',
		value: function flagAllErrors() {
			if (!this.state.disabled) return;
			var target = void 0;
			for (var i = 0; i < this.formDataKeys.length; i++) {
				target = document.getElementById(this.formDataKeys[i]);
				target.classList.remove('error');
				target.nextSibling.classList.remove('error');
			}
		}
	}, {
		key: 'autoSubmit',
		value: function autoSubmit() {
			var _this4 = this;

			clearTimeout(this.submitTimeout);
			this.submitTimeout = setTimeout(function () {
				_this4.onSubmit(new Event('synthetic', { bubbles: false, cancelable: true }));
			}, 2000);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.submitTimeout) {
				clearTimeout(this.submitTimeout);
				this.onSubmit(new Event('synthetic', { bubbles: false, cancelable: true }));
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				{
					id: this.props.id,
					className: 'formian-form ' + this.props.className,
					onSubmit: this.onSubmit,
					style: this.props.style,
					disabled: this.state.disabled
				},
				this.renderChildren()
			);
		}
	}]);

	return Form;
}(_react.Component);

var Formian = _Inputs2.default.reduce(function (formian, input) {
	formian[input.name] = input;
	return formian;
}, { Form: Form, Submit: _Submit2.default, Reset: _Reset2.default, Fieldset: _Fieldset2.default });

exports.default = Formian;