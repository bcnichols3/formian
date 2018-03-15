import React from 'react';

import Container from '../common/Container';

const Range = ({dataset, tabIndex="0", name="range", className="", style, text="choose a range", min=0, max=100, step=1, onChange, onBlur, onFocus, defaultValue=min, vertical}) => {
	return (
		<Container type="range" className={className} style={style}>
			<label htmlFor={name}>{text}</label>
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

export default Range;
