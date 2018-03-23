import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../common/Input';

const Tel = (props) => {
	return <Input type="tel" {...props} className={props.className+" tel"} />;
};

Tel.defaultProps = {
	name: "phone",
	autoComplete: "tel",
	errorText: "Please enter a valid phone number"
};

export default Tel;
