var Input				= require('./core/FormInput')
,	Submit				= require('./core/FormSubmit')
,	Err					= require('./core/FormErr')
// ,	FormParse			= require('./core/FormParse')
,	alias				= require('./helpers/alias')
,	initialize			= require('./helpers/initializer')
;

/*
Var args
	{name: 'firstname', type: 'text', init: ''}
	{name: 'country', type: 'select', init: '', options: ['USA', 'Korea']}
*/

function Formian (name, submitFunc/*, 'email', 'name', ...*/) {
	this.form = {
		name: name,
		node: document.getElementById(name)
	};
	this.state = {};
	this.inputs = [];

	var args = Array.prototype.slice.call(arguments);

	var field;
	for (var i = 2; i < args.length; i++) {
		field = args[i];

		// if field is an alias, look up the alias
		if (typeof field === 'string') field = alias[field];

		// create the input
		this.inputs.push(
			new Input[field.type](
				this, // owner
				field.name,
				field.options
			)
		);

		// initialize the input or lookup standard initialize
		if (field.init) this.state[field.name] = field.init;
		else this.state[field.name] = initialize[field.type];
	}

	this.submit = new Submit(this, submitFunc);
	this.err = new FormError(this);

	this.setState = this.setState.bind(this);

	this.captureAutocomplete();
}

Formian.prototype.setState = function(data) {
	// Create and assign a new local state obj from the old one
	this.state = Object.assign({}, this.state, data);

	// rerender nodes with new state values
	var key;
	for (var i = 0; i < this.inputNodes.length; i++) {
		key = this.inputNodes[i].name;
		if (this.inputNodes[i].type === 'select-one') {
			this.selectValue(this.inputNodes[i], key);
		} else {
			this.inputNodes[i].value = this.state[key];
		}
	}
};

// IE can't dynamically change 'selected' so this function is disabled for IE
Formian.prototype.selectValue = function(node, key) {
	var children = node.children;

	if (this.state[key] === '') {
		children[0].selected = true;
		node.classList.remove('selected');
	} else {
		for (var i = 1; i < children.length; i++) {
			children[0].selected = false;
			node.classList.add('selected');
			if (children[i].value === this.state[key]) {
				children[i].selected = true;
			} else {
				children[i].selected = false;
			}
		}
	}
};

Formian.prototype.captureAutocomplete = function() {
	if (this.name !== 'login') {
		this.setState({});
	} else {
		var key;
		var val;
		var newState = {};

		for (var i = 0; i < this.inputs.length; i++) {
			key = this.inputs.node.name;
			val = this.inputs.node.value;

			newState[key] = val;
		}
		this.setState(newState);
	}
};

Formian.prototype.errorHandler = function (errType) {
	var	errHTML 		= '<span><i class="fa fa-exclamation-triangle"aria-hidden="true"></i> '
	,	errClose		= '</span>'
	,	errorLanguage
	;

	if (store.getState() && store.getState().copy) {
		errorLanguage = store.getState().copy.error[errType];
	} else {
		errorLanguage = 'err';
	}

	if (errType === 'underage' || errType === 'unavailable') {
		// these errors are different in that they alter the view
		if (!~this.name.indexOf('gate')) {
			$('#register-submit').css({display: 'none'});
		} else {
			$('.' + errType).animate({opacity: 1}, 500).toggle();
			$('.inner.open').toggle().animate({opacity: 0}, 500);
		}
	} else if (errType === 'clearError') {
		this.errorNode.html('&nbsp;');
		this.errorNode.animate({opacity: 0}, 250);
	}
	else {
		this.errorNode.html(errHTML + errorLanguage + errClose);
		this.errorNode.animate({opacity: 1}, 250);
	}
};

module.exports = Formian;
