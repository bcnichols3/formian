/* ------ FIELD VALIDATORS ------ */
/* (asserts the value of one kind of field) */

module.exports = {
	country: function() {
		return true;
	},
	month: function() {
		var mm = parseInt(this.state.month, 10);

		return mm < 13 && mm > 0;
	},
	day: function() {
		var dd = parseInt(this.state.day, 10);

		return dd < 32 && dd > 0;
	},
	year: function() {
		var yyyy = parseInt(this.state.year, 10);

		var currentYear = new Date().getFullYear();

		return yyyy >= currentYear - 125 && yyyy <= currentYear;
	},
	firstname: function() {
		return this.state.firstname.length < 51;
	},
	lastname: function() {
		return this.state.lastname.length < 51;
	},
	// Asserts email seems correct
	email: function() {
	    var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

		var email = this.state.email;

		if (is.not.ie()) return regexp.test(email) && email.length < 76;
		else return email.split('@').length === 2 && email.length < 76;
	},
	password: function() {
		return true;
	},
	confirm: function() {
		return true;
	},
	phone: function() {
		return true;
	}
};
