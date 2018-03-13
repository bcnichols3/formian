var format = require('../../helpers/format');

/*
<div class="input-wrapper">
	<label for="formName-inputName" class="form-field-label" >First name</label>
	<input id="formName-inputName" class="form-field-input text-field" type="text" placeholder="First name" required/>
</div>
*/

function TextInput (owner, name, options) {
	this.owner = owner;
	this.name = name;
	this.options = options;

	// Create wrapper
	this.$wrapper = document.createElement('div');
	this.$wrapper.classList.add('form-field-wrapper');

	// Create label
	this.$label = document.createElement('label');
	this.$label.classList.add('form-field-label');
	this.$label.for = this.owner.name + '-' + name;

	this.$wrapper.appendChild(this.$label);

	// Create input
	this.$input = document.createElement('input');
	this.$input.type = 'text';
	this.$input.id = this.owner.name + '-' + name;
	this.$input.placeholder = this.name;
	this.$input.classList.add('form-field-input');
	if (options.required) this.$input.required = true;

	this.$wrapper.appendChild(this.$input);

	// Register input listener
	this.$input.addEventListener('input', this.changeHandler);

	// Bind methods
	this.changeHandler = this.changeHandler.bind(this);
}

FormInput.prototype.changeHandler = function(evt) {
	evt.preventDefault();
	this.owner.err.errorHandler('clearError');

	var key = evt.target.name;
	var val = evt.target.value;
	var newState = {};

	if (format[key]) val = format[key](val);
	else val = this.genericFormatter(val);

	evt.target.value = val;
	newState[key] = val;
	this.owner.setState(newState);
};

module.exports = TextInput;
