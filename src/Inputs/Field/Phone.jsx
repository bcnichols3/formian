import React from 'react';

import Input from '../../common/Input';

const Phone = (props) => {
	const newProps = Object.assign({}, props, {
		name: props.name || "phone",
		placeholder: props.placeholder,
		errorText: props.errorText || "please enter a valid phone number"
	});
	return <Input type="tel" {...newProps} />;
};

export default Phone;
