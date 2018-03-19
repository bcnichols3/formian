import React from 'react';
import PropTypes from 'prop-types';

import CustomBox from '../../common/CustomBox';
import Container from '../../common/Container';
import ErrorMessage from '../../common/ErrorMessage';

const Checkbox = ({
	name, type,
	labelText, errorText,
	dataset, defaultValue, tabIndex,
	onChange, onFocus, onBlur,
	icon, style, className, position,
	children,
}) => (
		<Container type={type} className={className} style={style}>
			<label htmlFor={name}>
				<input
					tabIndex={tabIndex}
					id={name} type="checkbox"
					name={name}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					checked={!!dataset[name]}
				/>
				<CustomBox name={name} type={type} icon={icon} />
				<div className={`${type}-text`}>{children || labelText || name}</div>
			</label>
			<ErrorMessage errorText={errorText} position={position} />
		</Container>
	)
;

Checkbox.propTypes = {
	name: PropTypes.string.isRequired
};

Checkbox.defaultProps = {
	type: "checkbox",
	tabIndex: "0",
	defaultValue: false,
	errorText: "Please check to agree",
	className: "",
	tinyInt: false
};

export default Checkbox;
