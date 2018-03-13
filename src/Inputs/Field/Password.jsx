import React from 'react';

import Input from './Input';

const Name = (props) => {
	const newProps = Object.assign({}, props, {
		name: props.name || "password",
		placeholder: props.placeholder || "password",
		errMessage: props.errMessage || "Please enter your password"
	});
	return (<Input
		type="password"
		{...newProps}
	/>);
};

export default Name;
