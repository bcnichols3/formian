import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../common/Container';

const Range = ({
	name, type,
	labelText,
	dataset, tabIndex,
	min, max, step,
	onChange, onFocus, onBlur,
	icon, style, className, position, vertical
}) => {
	return (
		<Container type={type} className={className} style={style}>
			<label htmlFor={name}>{labelText || name}</label>
			<input
				id={name} type="range"
				tabIndex={tabIndex}
				min={min} max ={max} step={step}
				onChange={onChange}
				value={dataset[name]}
			/>
		</Container>
	);
};

Range.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
};

Range.defaultProps = {
	type: "range",
	min: 0,
	max: 100,
	step: 1,
	defaultValue: 50,
	tabIndex: "0",
	options: ['option 1', 'option 2'],
	className: ""
};

export default Range;
