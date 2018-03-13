var moment				= require('moment');

function FormParse(owner) {
	this.owner = owner;

	this.parseAll = this.parseAll.bind(this);
	this.birthday = this.birthday.bind(this);
	this.phone = this.phone.bind(this);
}

FormParse.prototype.parseAll = function() {
	var props = this.owner.state;

	if (props.month) this.birthday();
	if (props.phone) this.phone();
};

FormParse.prototype.birthday = function() {
	var props = this.owner.state;

	if (props.month.length === 1) {
		props.month = '0' + props.month;
	}
	if (props.day.length === 1) {
		props.day = '0' + props.day;
	}

	var datestring = props.month + '-' + props.day + '-' + props.year;

	if (moment(datestring, 'MM-DD-YYYY', true).isValid()) {
		props.birthday = datestring;
	} else {
		props.birthday = false;
	}
};

// remove whitespace from phone (no regex cause of IE errors...)
FormParse.prototype.phone = function() {
	var phone = this.owner.state.phone;
	while (~phone.indexOf(' ')) {
		phone = phone.replace(' ', '');
	}
	this.owner.state.phone = phone;
};

module.exports = FormParse;
