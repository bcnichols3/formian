'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Datalist = require('./Array/Datalist');

var _Datalist2 = _interopRequireDefault(_Datalist);

var _Range = require('./Array/Range');

var _Range2 = _interopRequireDefault(_Range);

var _Select = require('./Array/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Checkbox = require('./Box/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Radio = require('./Box/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _OnOff = require('./Box/OnOff');

var _OnOff2 = _interopRequireDefault(_OnOff);

var _Email = require('./Field/Email');

var _Email2 = _interopRequireDefault(_Email);

var _Name = require('./Field/Name');

var _Name2 = _interopRequireDefault(_Name);

var _Number = require('./Field/Number');

var _Number2 = _interopRequireDefault(_Number);

var _Password = require('./Field/Password');

var _Password2 = _interopRequireDefault(_Password);

var _Phone = require('./Field/Phone');

var _Phone2 = _interopRequireDefault(_Phone);

var _Text = require('./Field/Text');

var _Text2 = _interopRequireDefault(_Text);

var _TextArea = require('./Field/TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _File = require('./Special/File');

var _File2 = _interopRequireDefault(_File);

var _Recaptcha = require('./Special/Recaptcha');

var _Recaptcha2 = _interopRequireDefault(_Recaptcha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ========== SPECIAL INPUTS


// ========== BOX INPUTS
exports.default = [_Checkbox2.default, _Datalist2.default, _Email2.default, _File2.default, _Name2.default, _Number2.default, _OnOff2.default, _Password2.default, _Phone2.default, _Radio2.default, _Range2.default, _Select2.default, _Text2.default, _TextArea2.default, _Recaptcha2.default];

// ========== FIELD INPUTS
// ========== ARRAY INPUTS