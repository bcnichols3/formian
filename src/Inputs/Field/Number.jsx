import React from 'react';

import Input from '../../common/Input';

const Number = (props) => {
	const newProps = Object.assign({}, props, {
		name: props.name || "number",
		placeholder: props.placeholder,
		errorText: props.errorText || "please enter a number",
		wheel: props.wheel || false
	});
	return (<Input
		className={`number ${!newProps.wheel ? 'number-no-wheel' : ''}`}
		type="number"
		{...newProps}
	/>);
};

export default Number;
