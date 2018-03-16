import React from 'react';
import PropTypes from 'prop-types';

const Option = ({data}) => (
	<option
		label={data.label || data.value || data}
		value={data.value || data}
		disabled={data.disabled}
	/>
);

Option.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	])
};

export default Option;
