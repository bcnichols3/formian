import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({errorText, placement}) => {
	return errorText !== false
		? (<div className={`error-message ${placement}`}>{errorText}</div>)
		: null
	;
};

ErrorMessage.defaultProps = {
	errorText: "invalid input",
	placement: "left"
};

export default ErrorMessage;
