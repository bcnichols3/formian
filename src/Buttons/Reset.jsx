import React from 'react';

import Container from '../common/Container';

const Reset = ({disabled, tabIndex="0", className="", style, text="restore defaults"}) => {
	if (disabled) className += " disabled";
	return (
		<Container type="reset" className={className} style={style}>
			<input
				type="reset"
				tabIndex={tabIndex}
				value={text}
			/>
		</Container>
	);
};

export default Reset;
