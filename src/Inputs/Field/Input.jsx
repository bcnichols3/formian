import React from 'react';

const Input = ({name="text", dataset, tabIndex="0", onChange, onBlur, onFocus, type="text", text=name, placeholder=text, errMessage="Invalid Input", className=""}) => (
	<div className={`input-container ${type} ${className}`}>
		<label htmlFor={name}>{text}</label>
		<input
			id={name} type={type}
			tabIndex={tabIndex}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
			value={dataset[name]}
		/>
		<div className="error-message">{errMessage}</div>
	</div>
);

export default Input;
