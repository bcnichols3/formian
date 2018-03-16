import React from 'react';

const ErrorMessage = ({errMessage="invalid input", placement="left"}) => {
	return errMessage !== false
		? (<div className={`error-message ${placement}`}>{errMessage}</div>)
		: null
	;
};

export default ErrorMessage;
