import React from 'react';

const Submit = ({disabled, tabIndex="0", className="", text}) => (
	<div className={`input-container submit ${className}`}>
		<input
			type="submit"
			tabIndex={tabIndex}
			value={text ? text : "submit"}
			disabled={disabled}
		/>
	</div>
);

export default Submit;
