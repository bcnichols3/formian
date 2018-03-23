import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../common/Input';

const Text = (props) => (
	<Input type="text" {...props} className={props.className+" text"} />
);

Text.defaultProps = {
	type: "text",
	name: "text",
	errorText: "Please enter a short message"
};

export default Text;
