import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../common/Input';

const Month = props => (
	<Input type="month" {...props} className={props.className+" month"} />
);

Month.defaultProps = {
	name: "month",
	autoComplete: "on",
	errorText: "Please enter a month and year"
};

export default Month;
