const version = require('../package').version;

let once;

export default function injectCSS() {
	if (once) return;
	const css = document.createElement('link');
	css.type = 'text/css';
	// css.href = `https://unpkg.com/react-formian@${version}/build/style.css`;
	css.href = `../../build/style.css`;
	css.rel = 'stylesheet';
	document.getElementsByTagName('head')[0].appendChild(css);
	once = true;
}
