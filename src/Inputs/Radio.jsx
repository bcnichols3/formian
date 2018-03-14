import React from 'react';

const Radio = ({
	name, className="", text=name, tabIndex="0", icon, onChange, onFocus, onBlur, children,
	dataset, options=['option1', 'option2'], defaultValue, type="radio",
	errMessage = "Please select an option"
}) => (
	<fieldset id={name} name={name}>
		<legend>{text}</legend>
		{options.map(option => (
			<div key={option} className={`input-container radio ${className}`}>
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
			</div>
		))}
		{errMessage !== false
			? <div className="error-message">{errMessage}</div>
			: null}
	</fieldset>
);

export default Radio;
