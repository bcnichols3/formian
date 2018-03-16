import React from 'react';

import Input from '../../common/Input';

const Name = (props) => {
	const newProps = Object.assign({}, props, {
		name: props.name || "password",
		placeholder: props.placeholder,
		errorText: props.errorText || "please enter your password"
	});
	return (<Input type="password" {...newProps} />);
};

export default Name;
