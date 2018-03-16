import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';

const OnOff = (props) => <Checkbox {...props} /> ;

OnOff.propTypes = {
	name: PropTypes.string.isRequired
};

OnOff.defaultProps = {
	type: "onoff",
	required: false,
	errorText: false,
	onText: "on",
	offText: "off"
};

export default OnOff;
