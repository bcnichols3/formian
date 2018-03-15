import React from 'react';

import Container from '../common/Container';

const Submit = ({disabled, style, flagAllErrors, tabIndex="0", className="", text="submit"}) => {
	if (disabled) className += ' disabled';
	return (
		<Container type="submit" className={className} style={style}>
			<input
				type="submit"
				tabIndex={tabIndex}
				onFocus={flagAllErrors}
				value={text}
			/>
		</Container>
	);
};

export default Submit;
