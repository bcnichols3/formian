import React from 'react';
import PropTypes from 'prop-types';

import Container from '../common/Container';

const Submit = ({
	labelText, value,
	disabled, tabIndex,
	flagAllErrors,
	style, className, position
}) => {
	if (disabled) className += ' disabled';
	return (
		<Container type="submit" className={className} style={style}>
			<input
				type="submit"
				tabIndex={tabIndex}
				onClick={flagAllErrors}
				value={labelText || value}
			/>
		</Container>
	);
};

Submit.defaultProps = {
	type: "submit",
	disabled: true,
	tabIndex: "0",
	value: "submit",
	labelText: "submit",
	className: ""
};

export default Submit;
