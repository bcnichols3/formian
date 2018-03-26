'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// NOTE formatters manipulate and upate a user input in real time, putting into the chosen format.

var formatters = {};

// ========== BOX INPUTS
formatters.checkbox = checkbox;
formatters.onoff = checkbox;
formatters.radio = preformatted;

// ========== ARRAY INPUTS
formatters.datalist = preformatted;
formatters.range = preformatted;
formatters.select = preformatted;

// ========== FIELD INPUTS
formatters.email = preformatted;
formatters.password = preformatted;
formatters.phone = preformatted;
formatters.text = alphanumeric;
formatters.textArea = textLarge;

// ========== SPECIAL INPUTS
formatters.recaptcha = preformatted;
formatters.file = function (target) {
	return target.files ? Array.from(target.files) : [];
};

exports.default = formatters;

// ========== COMMON FORMATTERS

function preformatted(target) {
	return target.value;
}
function textSmall(target) {
	return target.value.slice(0, 25);
}
function textMed(target) {
	return target.value.slice(0, 50);
}
function textLarge(target) {
	return target.value.slice(0, 50000);
}
function checkbox(target) {
	return !!target.checked || false;
}
function tinyInt(target) {
	return target.checked ? 1 : 0;
}

function alphanumeric(target) {
	return target.value.replace(/[^\w\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\.\,\u2010-\u2014\u0020]+/gi, '').slice(0, 255);
}