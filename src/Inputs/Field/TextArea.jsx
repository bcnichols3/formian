import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../common/Input';

const TextArea = (props) => (
	<Input type="textarea" {...props} className={props.className+" textarea"} />
);

TextArea.defaultProps = {
	name: "message",
	errorText: "Please enter a message"
};

export default TextArea;
