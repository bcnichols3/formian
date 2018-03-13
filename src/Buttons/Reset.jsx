import React from 'react';

const Reset = ({disabled, tabIndex="0", className="", text}) => (
	<div className={`input-container reset ${className}`}>
		<input
			type="reset"
			tabIndex={tabIndex}
			value={text ? text : "restore defaults"}
			disabled={disabled}
		/>
	</div>
);

export default Reset;
