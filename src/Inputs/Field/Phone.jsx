import React from 'react';

import Input from '../../common/Input';

const Phone = (props) => {
	const newProps = Object.assign({}, props, {
		name: props.name || "phone",
		type: "tel",
		placeholder: props.placeholder || "(123) 867-5309",
		errMessage: props.errMessage || "please enter a valid phone number"
	});
	return <Input {...newProps} />;
};

export default Phone;
