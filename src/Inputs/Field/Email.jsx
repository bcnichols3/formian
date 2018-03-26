import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../common/Input';

const Email = props => (
	<Input type="email" {...props} className={props.className} />
);

Email.defaultProps = {
	type: "email",
	name: "email",
	defaultValue: "",
	className: "",
	autoComplete: "email",
	errorText: "Please enter a valid email address"
};

export default Email;
