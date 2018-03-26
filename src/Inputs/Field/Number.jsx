import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../common/Input';

const Number = (props) => (
	<Input type="number" {...props} className={props.className} />
);

Number.defaultProps = {
	type: "number",
	name: "number",
	defaultValue: "",
	className: "",
	errorText: "Please enter a number"
};

export default Number;
