import React from 'react';

const Submit = ({disabled, flagAllErrors, tabIndex="0", className="", text}) => (
	<div className={`input-container submit ${className} ${disabled ? 'disabled' : ''}`}>
		<input
			type="submit"
			tabIndex={tabIndex}
			onFocus={flagAllErrors}
			value={text ? text : "submit"}
			disabled={disabled}
		/>
	</div>
);

export default Submit;
