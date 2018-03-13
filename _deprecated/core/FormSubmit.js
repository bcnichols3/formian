
function FormSubmit (owner, submitFunc) {
	this.owner = owner;
	this.submitFunc = submitFunc;

	this.node = document.createElement('input');
	this.node.type = 'text';
	this.node.id = this.owner.name + '-' + name;
	this.node.value = 'submit';
	this.node.classList.add('form-field-submit');

	// Bind methods
	this.handler = this.handler.bind(this);

	this.owner.form.node.onsubmit(this.handler);
	// For custom submit buttons

	this.submit.onclick(this.handler);
	this.submit.onkeydown(function(evt) {
		if (evt.keyCode === 13) this.click();
	});
}


FormSubmit.prototype.handler = function(evt) {
	evt.preventDefault();
	evt.stopPropagation();

	// Client-side error handling
	if (!this.owner.error.client()) {

		console.log('posting', this.owner.state);

		// Server-side error handling
		this.submitFunc(this.owner.state).then(serverError => {
			if (serverError) this.owner.error.server(this.owner.name);
		});
	}

	// Always wipe all password fields
	if (this.owner.state.password) this.owner.setState({password: ''});
	if (this.owner.state.confirmPassword) this.owner.setState({confirmPassword: ''});
};

module.exports = FormSubmit;
