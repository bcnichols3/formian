import React from 'react';
import { connect } from 'react-redux';

import Input from './Input';

const Email = (props) => {
	const newProps = Object.assign({}, props, {
		name: props.name || "email",
		type: "email",
		placeholder: props.placeholder || "email@address.com",
		errMessage: props.errMessage || "please enter a valid email address"
	});
	return <Input {...newProps} />;
};

export default Email;
