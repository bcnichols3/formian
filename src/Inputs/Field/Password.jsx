import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../common/Input';

const Password = (props) => (
	<Input type="password" {...props} className={props.className+" password"} />
);

Password.defaultProps = {
	type: "password",
	name: "password",
	autoComplete: "current-password",
	errorText: "Please enter your password"
};

export default Password;
