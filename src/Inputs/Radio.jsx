import React from 'react';

import Container from '../common/Container';

const Radio = ({
	name, className="", text=name, tabIndex="0", icon, onChange, onFocus, onBlur, children, style,
	dataset, options=['option1', 'option2'], defaultValue=options[0], type="radio",
	errMessage = "Please select an option"
}) => (
	<fieldset id={name} name={name}>
		<legend>{text}</legend>
		{options.map(option => (
			<Container key={option} type={type} className={className} style={style}>
				<label htmlFor={option+'@@'+name}>
					<input
						id={option+'@@'+name} type={type}
						tabIndex={tabIndex}
						name={name}
						value={option}
						onChange={onChange}
						onBlur={onBlur}
						onFocus={onFocus}
						checked={dataset[name] === option}
					/>
					<div className="radio-custom" >
						<div className="custom-icon">{''}</div>
						<div className="radio-text">{children || option}</div>
					</div>
				</label>
			</Container>
		))}
		{errMessage !== false
			? <div className="error-message">{errMessage}</div>
			: null}
	</fieldset>
);

export default Radio;
