var validate = require('../helpers/validate');

function FormError (owner) {
	this.owner = owner;

	this.node = document.createElement('div');
	this.node.id = this.owner.name + '-error-msg';

	this.clientError = this.clientError.bind(this);
	this.available = this.available.bind(this);
}

FormError.prototype.clientError = function() {
	var bool = false;

	if (!this.completed()) {
		this.owner.errorHandler('incomplete');
		bool = true;
	} else if (this.owner.state.password && !this.securePassword()) {
		this.owner.errorHandler('password');
		bool = true;
	} else if (this.owner.state.confirm && !this.confirmedPassword()) {
		this.owner.errorHandler('confirmation');
		bool = true;
	} else if (this.owner.state.month && !this.drinkingAge()) {
		this.owner.errorHandler('underage');
		bool = true;
	} else if (this.owner.state.country && !this.available()) {
		this.owner.errorHandler('unavailable');
		bool = true;
	}

	return bool;
};

FormError.prototype.completed = function() {
	var inputs = this.owner.inputNodes;
	var key;
	var bool = true;

	for (var i = 0; i < inputs.length; i++) {
		key = inputs[i].name;
		// missing input error
		if (!this.owner.state[key] && inputs[i].required) {
			console.log('missing info!', key);
			inputs[i].classList.add('error');
			bool = false;
		// invalid input error
	} else if (!validate[key].call(this.owner)) {
			console.log('user input error!', key);
			inputs[i].classList.add('error');
			bool = false;
		// field is ok
		} else {
			inputs[i].classList.remove('error'); // rmv err colors on form
		}
	}
	return bool;
};

/* ------ SPECIAL VALIDATORS ------ */
/* (asserts the information follows some custom rule) */

// Asserts the password is 6+ chars and is entered twice identically
FormError.prototype.securePassword = function() {
	return this.owner.state.password.length > 5;
};

FormError.prototype.confirmedPassword = function() {
	return this.owner.state.password === this.owner.state.confirm;
};

FormError.prototype.drinkingAge = function() {
	var minAge;

	// Default USA if local beverage law lookup fails
	if (!legalAge[this.owner.state.country]) minAge = 21;
	else minAge = legalAge[this.owner.state.country].drink;

	var ageCheck = new Date()
	,	currentDate = new Date()
	,	targetYear = currentDate.getFullYear() - minAge
	;

	ageCheck.setFullYear(this.owner.state.year, this.owner.state.month - 1, this.owner.state.day);
	currentDate.setFullYear(targetYear);

	return currentDate - ageCheck > 0;
};

FormError.prototype.available = function() {
	return ~this.markets.indexOf(this.owner.state.country);
};

module.exports = FormError;
