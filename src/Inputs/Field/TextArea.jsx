import React from 'react';

import Input from '../../common/Input';

const TextArea = (props) => {
	const newProps = Object.assign({}, props, {
		name: props.name || "textarea",
		placeholder: props.placeholder || "your message",
		errorText: props.errorText || "please enter a message"
	});
	return (<Input
		type="textarea"
		{...newProps}
	/>);
};

export default TextArea;
