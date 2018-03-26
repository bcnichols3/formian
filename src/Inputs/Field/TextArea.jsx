import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../common/Input';

const TextArea = (props) => (
	<Input type="textarea" {...props} className={props.className} />
);

TextArea.defaultProps = {
	type: "textarea",
	name: "message",
	defaultValue: "",
	className: "",
	errorText: "Please enter a message"
};

export default TextArea;
