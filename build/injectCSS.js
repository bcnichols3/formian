'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = injectCSS;
var version = require('../package').version;

var once = void 0;

function injectCSS() {
	if (once) return;
	var css = document.createElement('link');
	css.type = 'text/css';
	// css.href = `https://unpkg.com/react-formian@${version}/build/style.css`;
	css.href = '../../build/style.css';
	css.rel = 'stylesheet';
	document.getElementsByTagName('head')[0].appendChild(css);
	once = true;
}