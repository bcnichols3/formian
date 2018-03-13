import React from 'react';

const Datalist = ({name, tabIndex="0", className="", dataset, options=['enter options array'], defaultValue, onChange, onBlur, onFocus, text=name, placeholder=text, errMessage="Please select an option"}) => (
	<div className={`input-container datalist ${className}`}>
		<label htmlFor={name}>{text}</label>
		<input
			list={name}
			value={dataset[name]}
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
		/>
		{/* for legacy reasons, wrap options inside a select */}
		<datalist id={name} placeholder={placeholder} tabIndex={tabIndex}>
			<select>
				{options.map(opt => (typeof opt === 'object'
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
		</datalist>
		<div className="error-message">{errMessage}</div>
	</div>
);

export default Datalist;
