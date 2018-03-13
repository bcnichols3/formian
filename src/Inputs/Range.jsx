import React from 'react';

const Range = ({dataset, tabIndex="0", name="range", className="", text="choose a range", min=0, max=100, step=1, onChange, onBlur, onFocus, defaultValue=min, vertical}) => {
	return (<div
		className={`input-container range ${className}
			${vertical ? 'vertical' : ''}`}>
		<label htmlFor={name}>{text}</label>
		<input
			id={name} type="range"
			tabIndex={tabIndex}
			min={min} max ={max} step={step}
			onChange={onChange}
			value={dataset[name]}
		/>
	</div>);
};

export default Range;
