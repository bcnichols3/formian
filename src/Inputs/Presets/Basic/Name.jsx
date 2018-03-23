import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../../common/Input';

const Name = props => (
	<Input {...props} className={props.className+" name"} />
);

Name.defaultProps = {
	name: "name",
	type: "text",
	labelText: "Name",
	autoComplete: "name",
	errorText: "Please enter your name"
};

export default Name;
