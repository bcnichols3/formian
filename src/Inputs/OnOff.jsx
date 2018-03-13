import React from 'react';

import Checkbox from './Checkbox';

const OnOff = (props) => {
	const newProps = Object.assign({}, props, {
		name: props.name || "onoff",
		type: "onoff",
		required: props.required || false,
		errMessage: false
	});
	return <Checkbox {...newProps} />;
};

export default OnOff;
