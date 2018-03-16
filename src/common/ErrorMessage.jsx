import React from 'react';

const ErrorMessage = ({errorText="invalid input", placement="left"}) => {
	return errorText !== false
		? (<div className={`error-message ${placement}`}>{errorText}</div>)
		: null
	;
};

export default ErrorMessage;
