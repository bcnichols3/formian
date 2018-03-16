import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../common/Container';
import CustomBox from '../../common/CustomBox';
import ErrorMessage from '../../common/ErrorMessage';
import Option from '../../common/Option';

const Select = ({
	name, type,
	labelText, errorText, placeholder,
	dataset, options, tabIndex,
	onChange, onFocus, onBlur,
	icon, style, className, position
}) => (
	<Container type="select" className={className} style={style}>
		<label htmlFor={name}>{labelText || name}</label>
		<select
			id={name} type={type}
			tabIndex={tabIndex}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
			value={dataset[name]}
		>
			{options.map(data => (
				<Option key={data.value || data} data={data} />
			))}
		</select>
		<CustomBox name={name} type={type} icon={icon} />
		<ErrorMessage errorText={errorText} position={position} />
	</Container>
);

Select.propTypes = {
	options: PropTypes.array,
	defaultValue: PropTypes.number
};

Select.defaultProps = {
	type: "select",
	defaultValue: 0,
	tabIndex: "0",
	options: ['option 1', 'option 2'],
	errorText: "please select an option",
	className: ""
};

export default Select;
