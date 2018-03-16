import React from 'react';

import Input from '../../common/Input';

const Text = (props) => {
	const newProps = Object.assign({}, props, {
		placeholder: props.placeholder,
		errorText: props.errorText || "please enter your text"
	});
	return <Input type="text" {...newProps} />;
};

export default Text;
