import React from 'react';

import Input from './Input';

const Name = (props) => {
	const newProps = Object.assign({}, props, {
		name: props.name || "name",
		text: "Your Name",
		placeholder: props.placeholder || "name",
		errMessage: props.errMessage || "Please enter your name"
	});
	return (<Input
		className="name"
		type="text"
		{...newProps}
	/>);
};

export default Name;
