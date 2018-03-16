import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../common/Container';
import CustomBox from '../../common/CustomBox';
import ErrorMessage from '../../common/ErrorMessage';
import Fieldset from '../../common/Fieldset';

const Radio = ({
	name, type,
	labelText, errorText,
	dataset, options, tabIndex,
	onChange, onFocus, onBlur,
	icon, style, className, position
}) => (
	<Fieldset name={name} labelText={labelText}>
		{options.map(option => (
			<Container key={option} type={type} className={className} style={style}>
				<label htmlFor={option+'@@'+name}>
					<input
						id={option+'@@'+name} type="radio"
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
		<ErrorMessage errorText={errorText} position={position} />
	</Fieldset>
);

Radio.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.string)
};

Radio.defaultProps = {
	type: "radio",
	tabIndex: "0",
	options: ['option1', 'option2'],
	defaultValue: 0,
	errorText: "Please select an option",
	className: ""
};

export default Radio;
