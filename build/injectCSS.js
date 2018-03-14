'use strict';

function injectCSS() {
	var css = document.createElement('link'); // Creates <style></style>
	css.type = 'text/css'; // Specifies the type
	css.href = 'https://unpkg.com/react-formian@0.2.4/build/style.css';
	css.rel = 'stylesheet';
}

// Load the rules and execute after the DOM loads
window.onload = function () {
	injectCSS();
};