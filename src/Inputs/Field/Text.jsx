import React from 'react';

import Input from '../../common/Input';

const Text = (props) => {
	const newProps = Object.assign({}, props, {
		name: props.name || "text",
		placeholder: props.placeholder || "text",
		errMessage: props.errMessage || "please enter your text"
	});
	return (<Input
		type="text"
		{...newProps}
	/>);
};

export default Text;
