/* formatting */

module.exports = {
	generic: function (val) {
		return val.slice(0, 100).toLowerCase();
	},
	month: function(val) {
		return val.slice(0, 2);
	},
	day: this.month,
	year: function(val) {
		this.slice(0, 4);
	},
	phone: function(val) {
		var array = val.split('');
		array = array.filter(function(str) {
			return ~' 0123456789+'.indexOf(str);
		});
		return array.join('').slice(0, 30);
	},
	email: function (val) {
		return val.slice(0, 100).toLowerCase();
	}
};
