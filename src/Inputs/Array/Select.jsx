import React from 'react';

import Container from '../../common/Container';
import CustomBox from '../../common/CustomBox';
import ErrorMessage from '../../common/ErrorMessage';

const Select = ({name, type="select", icon, tabIndex="0", className="", style, dataset, position, options=['enter options array'], defaultValue, onChange, onBlur, onFocus, text=name, placeholder=text, errMessage="please select an option"}) => (
	<Container type="select" className={className} style={style}>
		<label htmlFor={name}>{text}</label>
		<select
			id={name} type={type}
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
		<CustomBox name={name} type={type} icon={icon} />
		<ErrorMessage errMessage={errMessage} position={position}/>
	</Container>
);

export default Select;
