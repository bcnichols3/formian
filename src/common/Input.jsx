import React from 'react';

import Container from './Container';
import ErrorMessage from './ErrorMessage';

const Input = ({name="text", position, dataset, style, tabIndex="0", onChange, onBlur, onFocus, type="text", text=name, placeholder=text, errMessage="invalid input", className=""}) => (
	<Container type={type} className={'field '+className} style={style}>
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
		<ErrorMessage errMessage={errMessage} position={position}/>
	</Container>
);

export default Input;
