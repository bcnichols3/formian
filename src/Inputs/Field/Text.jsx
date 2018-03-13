import React from 'react';

import Input from './Input';

const Text = (props) => {
	const newProps = Object.assign({}, props, {
		name: props.name || "text",
		placeholder: props.placeholder || "text",
		errMessage: props.errMessage || "Please enter your text"
	});
	return (<Input
		type="text"
		{...newProps}
	/>);
};

export default Text;
