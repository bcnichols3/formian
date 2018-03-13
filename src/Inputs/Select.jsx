import React from 'react';

const Select = ({name, tabIndex="0", className="", dataset, options=['enter options array'], defaultValue, onChange, onBlur, onFocus, text=name, placeholder=text, errMessage="Please select an option"}) => (
	<div className={`input-container select ${className}`}>
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
	</div>
);

export default Select;
