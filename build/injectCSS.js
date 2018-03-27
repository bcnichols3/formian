'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = injectCSS;
function injectCSS() {
	var styles = document.getElementById('react-formian-default-styles');
	if (styles) return;
	var css = document.createElement('link');
	css.id = 'react-formian-default-styles';
	css.type = 'text/css';
	css.href = 'https://unpkg.com/react-formian@0.2.*/build/style.css';
	// css.href = `../../build/style.css`;
	css.rel = 'stylesheet';
	document.getElementsByTagName('head')[0].appendChild(css);
}