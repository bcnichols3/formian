export default function injectCSS() {
	let styles = document.getElementById('react-formian-default-styles');
	if (styles) return;
	const css = document.createElement('link');
	css.id = 'react-formian-default-styles';
	css.type = 'text/css';
	css.href = `https://unpkg.com/react-formian@0.2.*/build/style.css`;
	// css.href = `../../build/style.css`;
	css.rel = 'stylesheet';
	document.getElementsByTagName('head')[0].appendChild(css);
}
