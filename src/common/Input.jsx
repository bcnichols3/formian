import React from 'react';

import Container from './Container';

const Input = ({name="text", dataset, style, tabIndex="0", onChange, onBlur, onFocus, type="text", text=name, placeholder=text, errMessage="invalid input", className=""}) => (
	<Container type={type} className={className} style={style}>
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
		{errMessage !== false
			? <div className="error-message">{errMessage}</div>
			: null}
	</Container>
);

export default Input;
