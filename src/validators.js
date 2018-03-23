// NOTE validators must return a boolean

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegex = /\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})/;

const validators = {};

// ========== PREVALIDATED INPUTS
validators.prevalidated = prevalidated;

// ========== BOX INPUTS
validators.checkbox = checkbox;
validators.onoff = checkbox;
validators.tinyInt = checkbox;
validators.radio = prevalidated;

// ========== ARRAY INPUTS
validators.color = prevalidated;
validators.datalist = prevalidated;
validators.range = prevalidated;
validators.select = checkbox;

// ========== FIELD INPUTS
validators.email = function email(val) { return emailRegex.test(val); };
validators.password = function password (val) { return val.length > 6; };
validators.phone = function phone(val) { return phoneRegex.test(val); };
validators.text = text;
validators.textarea = text;

// ========== SPECIAL INPUTS
validators.recaptcha = validators.prevalidated;
validators.file = checkbox;

export default validators;


// ========== COMMON VALIDATORS
function prevalidated (val) { return true; }
function text (val) { return val.length > 0; }
function checkbox (val) { return !!val; }
