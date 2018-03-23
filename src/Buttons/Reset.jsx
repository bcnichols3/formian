import React from 'react';

import Container from '../common/Container';

const Reset = ({
	labelText, value,
	disabled, tabIndex,
	resetForm,
	style, className, position
}) => {
	if (disabled) className += " disabled";
	return (
		<Container type="reset" className={className} style={style}>
			<input
				type="button"
				tabIndex={tabIndex}
				onClick={resetForm}
				disabled={disabled}
				value={labelText || value}
			/>
		</Container>
	);
};

Reset.defaultProps = {
	type: "reset",
	disabled: true,
	tabIndex: "0",
	value: "submit",
	labelText: "restore defaults",
	className: ""
};

export default Reset;
