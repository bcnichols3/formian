import React from 'react';

import Container from '../common/Container';

const Select = ({name, tabIndex="0", className="", style, dataset, options=['enter options array'], defaultValue, onChange, onBlur, onFocus, text=name, placeholder=text, errMessage="please select an option"}) => (
	<Container type="select" className={className} style={style}>
		<label htmlFor={name}>{text}</label>
		<select
			id={name} type="select"
			tabIndex={tabIndex}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
			value={dataset[name]}
		>
			{options.map(opt => (
				typeof opt === 'object'
					? <option
						key={opt.value}
						label={opt.label || opt.value}
						value={opt.value}
						disabled={opt.disabled || false}
					/>
					: <option
						key={opt}
						label={opt}
						value={opt}
					/>
			))}
		</select>
		<div className="error-message">{errMessage}</div>
	</Container>
);

export default Select;
