import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import ErrorMessage from './ErrorMessage';

const Input = ({name, position, dataset, style, tabIndex, onChange, onBlur, onFocus, type, labelText, placeholder, errorText, className}) => (
	<Container type={type} className={'field '+className} style={style}>
		<label htmlFor={name}>{labelText || name}</label>
		<input
			id={name}
			type={type}
			tabIndex={tabIndex}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
			value={dataset[name]}
		/>
		<ErrorMessage errorText={errorText} position={position} />
	</Container>
);

Input.defaultProps = {
	name: "text",
	type: "text",
	placeholder: "",
	errorText: "invalid input",
	className: "",
	tabIndex: "0"
};

export default Input;
