import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../common/Input';

const Url = props => (
	<Input type="url" {...props} className={props.className+" url"} />
);

Url.defaultProps = {
	name: "url",
	autoComplete: "url",
	placeholder: "http://www.example.com",
	errorText: "Please enter a valid web address"
};

export default Url;
