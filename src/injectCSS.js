const version = require('../package').version;

function injectCSS() {
	var css = document.createElement('link'); // Creates <style></style>
	css.type = 'text/css'; // Specifies the type
	// css.href = `https://unpkg.com/react-formian@${version}/build/style.css`;
	css.href = `../../build/style.css`;
	css.rel = 'stylesheet';
	document.getElementsByTagName('head')[0].appendChild(css);
}

console.log('inject css');

// Load the rules and execute after the DOM loads
window.onload = function() { injectCSS(); };
