'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = injectCSS;
var version = require('../package').version;

function injectCSS() {
	var styles = document.getElementById('react-formian-default-styles');
	if (styles) return;
	var css = document.createElement('link');
	css.id = 'react-formian-default-styles';
	css.type = 'text/css';
	css.href = 'https://unpkg.com/react-formian@' + version + '/build/style.css';
	// css.href = `../../build/style.css`;
	css.rel = 'stylesheet';
	document.getElementsByTagName('head')[0].appendChild(css);
}