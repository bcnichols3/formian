import React from 'react';

import Input from './Input';

const Number = (props) => {
	const newProps = Object.assign({}, props, {
		name: props.name || "number",
		placeholder: props.placeholder || "number",
		errMessage: props.errMessage || "Please enter a number",
		wheel: props.wheel || false
	});
	return (<Input
		className={`number ${!newProps.wheel ? 'number-no-wheel' : ''}`}
		type="number"
		{...newProps}
	/>);
};

export default Number;
