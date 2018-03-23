import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import ErrorMessage from './ErrorMessage';

const Input = ({
	name, type,
	labelText, placeholder, errorText,
	dataset, tabIndex, readOnly,
	onChange, onBlur, onFocus,
	autoComplete, inputMode,
	style, className, position
}) => (
	<Container type={type} className={'field '+className} style={style}>
		<label htmlFor={name}>{labelText || name}</label>
		<input
			id={name}
			type={type}
			inputMode={inputMode}
			tabIndex={tabIndex}
			placeholder={placeholder}
			readOnly={readOnly}
			onChange={onChange}
			onBlur={onBlur}
			autoComplete={autoComplete}
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
	autoComplete: "on",
	errorText: "invalid input",
	className: "",
	tabIndex: "0"
};

export default Input;
