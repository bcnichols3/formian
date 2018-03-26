import injectCSS from './injectCSS';

import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';

import validators from './validators';
import formatters from './formatters';

import Reset from './Buttons/Reset';
import Submit from './Buttons/Submit';

import Fieldset from './common/Fieldset';

import formElements from './Inputs';

const Recaptcha = formElements[formElements.length - 1];

class Form extends Component {
	constructor(props) {
		super(props);
		this.addHandlersToChild = this.addHandlersToChild.bind(this);
		this.renderChildren = this.renderChildren.bind(this);
		this.autoSubmit = this.autoSubmit.bind(this);

		this.onChange = this.onChange.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.onFocus = this.onFocus.bind(this);
		this.recaptcha = this.recaptcha.bind(this);

		this.flagAllErrors = this.flagAllErrors.bind(this);
		this.resetForm = this.resetForm.bind(this);
		this.isDefaultState = this.isDefaultState.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.formatters = formatters;
		this.validators = validators;

		if (props.customStyles !== false) injectCSS();

		this.initialState = {
			disabled: !this.props.noValidate,
			formData: {}
		};
		this.mapInputsToState(props.children);
		this.formDataKeys = Object.keys(this.initialState.formData);
		this.state = Object.assign({}, this.initialState);
	}

	mapInputsToState(children) {
		Children.map(children, child => {
			if (!child) return;
			else if (child.type === Recaptcha) {
				this.initialState.formData.recaptcha = false;
			}
			else if (child.type === Fieldset || child.type === 'fieldset') {
				this.mapInputsToState(child.props.children);
			}
			else if (formElements.includes(child.type)) {
				// discover the dataset object key
				const key = child.props.name;
				// set prevalidated for marked inputs; otherwise set an appropriate validator function
				if (!child.props.required) {
					this.validators[key] = this.validators.prevalidated;
				} else {
					this.setCheckerForChild(child, 'validators');
				}
				this.setCheckerForChild(child, 'formatters');
				this.setInitialStateForChild(child);
			}
		});
	}

	setCheckerForChild(child, set, setOff) {
		const {name, type, defaultValue} = child.props;

		// tinyInt rule
		if (child.props.tinyInt && set === 'formatters'
		&& (type === 'onoff' || type === 'checkbox')) {
			this[set][name] = this[set].tinyInt;
		}
		else {
			this[set][name] = child.props[set]				// custom
			|| this[set][name.toLowerCase()]				// by field name
			|| this[set][child.props.type.toLowerCase()]	// by type
			;
		}
	}

	setInitialStateForChild(child) {
		const {name, options, defaultValue} = child.props;

		const target = {value: defaultValue, checked: defaultValue};
		if (options) target.value = options[defaultValue];

		this.initialState.formData[name] = this.formatters[name](target);
	}

	addHandlersToChild(child, tabIndex) {
		if (formElements.includes(child.type)) {
			return React.cloneElement(child, {
				tabIndex: tabIndex,
				onChange: child.type === Recaptcha
					? this.recaptcha
					: this.onChange,
				onBlur: this.onBlur,
				onFocus: this.onFocus,
				dataset: this.state.formData,
				required: child.required || true
			});
		}
		if (child.type === Submit) {
			return React.cloneElement(child, {
				tabIndex: tabIndex,
				disabled: this.state.disabled,
				flagAllErrors: this.flagAllErrors
			});
		}
		if (child.type === Reset) {
			return React.cloneElement(child, {
				tabIndex: tabIndex,
				disabled: this.isDefaultState(),
				resetForm: this.resetForm
			});
		}
		return child;
	}

	renderChildren() {
		let tabIndex = 1;
		return Children.map(this.props.children, child => {
			if (!child) return;
			if (child.type === Fieldset || child.type === 'fieldset') {
				return React.cloneElement(child, {
					children: Children.map(child.props.children, child => {
						return this.addHandlersToChild(child, tabIndex++);
					})
				});
			}
			if (formElements.includes(child.type)) {
				return this.addHandlersToChild(child, tabIndex++);
			}
			return child;
		});
	}

	isDefaultState() {
		for (let i = 0; i < this.formDataKeys.length; i++) {
			if (this.initialState.formData[this.formDataKeys[i]]
			!== this.state.formData[this.formDataKeys[i]]) {
				return false;
			}
		}
		return true;
	}

	onChange(evt) {
		let key = evt.target.id;
		if (evt.target.type === 'radio') key = key.split('@@')[1];
		const formData = Object.assign({},
			this.state.formData,
			{[key]: this.formatters[key]
				? this.formatters[key](evt.target)
				: evt.target.value}
		);

		if (!this.props.noValidate) this.checkForm(formData);
		if (this.props.submitOnChange) this.autoSubmit();
	}

	// if left field with an error, flag it
	onBlur(evt) {
		const {formData} = this.state;
		const key = evt.target.id;
		const data = formData[key];

		if (this.validators[key]
		&& !this.validators[key](formData[key])) {
			evt.target.classList.add('error');
			evt.target.nextSibling.classList.add('error');
		}
	}

	// if focusing on an err'd field, clear the ErrorPage
	onFocus(evt) {
		evt.target.classList.remove('error');
		evt.target.nextSibling.classList.remove('error');
	}

	onSubmit(evt) {
		evt.preventDefault();
		if (this.state.disabled) this.flagAllErrors();
		else this.props.onSubmit.call(this, this.state.formData);
	}

	recaptcha(value) {
		const formData = Object.assign({},
			this.state.formData,
			{recaptcha: value}
		);

		if (!this.props.noValidate) this.checkForm(formData);
	}

	checkForm(formData) {
		let disabled = false;
		let key;
		for (let i = 0; i < this.formDataKeys.length; i++) {
			key = this.formDataKeys[i];
			if (this.validators[key]
			&& !this.validators[key](formData[key])) {
				disabled = true;
				break;
			}
		}
		this.setState({ disabled, formData });
	}

	resetForm(evt) {
		evt.preventDefault();
		this.setState(Object.assign({}, this.initialState));
		for (let i = 0 ; i < this.formDataKeys.length; i++) {
			document.getElementById(this.formDataKeys[i])
				.dispatchEvent(new Event('blur'))
			;
		}
	}

	flagAllErrors() {
		if (!this.state.disabled) return;
		let target;
		for (let i = 0 ; i < this.formDataKeys.length; i++) {
			target = document.getElementById(this.formDataKeys[i]);
			target.classList.remove('error');
			target.nextSibling.classList.remove('error');
		}
	}

	autoSubmit() {
		clearTimeout(this.submitTimeout);
		this.submitTimeout = setTimeout(() => {
			this.onSubmit(new Event('synthetic',
				{bubbles: false, cancelable: true}
			));
		}, 2000);
	}

	componentWillUnmount() {
		if (this.submitTimeout) {
			clearTimeout(this.submitTimeout);
			this.onSubmit(new Event('synthetic',
				{bubbles: false, cancelable: true}
			));
		}
	}

	render() {
		return (
			<form
				id={this.props.id}
				className={'formian-form '+this.props.className}
				onSubmit={this.onSubmit}
				style={this.props.style}
				disabled={this.state.disabled}
			>
				{this.renderChildren()}
			</form>
		);
	}
}

Form.defaultProps = {
	id: "",
	className: "",
	autoComplete: "on",
	noValidate: false,
	submitOnChange: false
};

const Formian = formElements.reduce((formian, input) => {
	formian[input.name] = input;
	return formian;
}, { Form, Submit, Reset, Fieldset });

export default Formian;
