import React from 'react';

import Container from '../../common/Container';
import CustomBox from '../../common/CustomBox';
import ErrorMessage from '../../common/ErrorMessage';

const Radio = ({
	name, className="", text=name, tabIndex="0", icon, onChange, onFocus, onBlur, children, style,
	dataset, options=['option1', 'option2'], defaultValue=options[0], type="radio", position,
	errMessage = "Please select an option"
}) => (
	<fieldset id={name} name={name}>
		<legend>{text}</legend>
		{options.map(option => (
			<Container key={option} type={type} className={className} style={style}>
				<label htmlFor={option+'@@'+name}>
					<input
						id={option+'@@'+name} type={type}
						tabIndex={tabIndex}
						name={name}
						value={option}
						checked={dataset[name] === option}
						onChange={onChange}
						onBlur={onBlur}
						onFocus={onFocus}
					/>
					<CustomBox name={name} type={type} icon={icon}>
						<div className="radio-text">{option}</div>
					</CustomBox>
				</label>
			</Container>
		))}
		<ErrorMessage errMessage={errMessage} position={position}/>
	</fieldset>
);

export default Radio;
