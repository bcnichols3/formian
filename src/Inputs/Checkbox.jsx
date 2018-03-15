import React from 'react';

import CustomBox from '../common/CustomBox';
import Container from '../common/Container';

const Checkbox = ({
	name,
	tabIndex="0",
	icon,
	className="",
	onChange,
	style,
	defaultValue=false,
	type="checkbox",
	text=name,
	children,
	value=name,
	errMessage = "Please check to agree",
	dataset}) => (
		<Container type={type} className={className} style={style}>
			<label htmlFor={name}>
				<input
					tabIndex={tabIndex}
					id={name} type="checkbox"
					name={name}
					value={value}
					onChange={onChange}
					checked={
						Array.isArray(dataset)
						? dataset.includes(value)
						: !!dataset[value]
					}
				/>
				<CustomBox
					name={name} type={type} icon={icon} tabIndex={tabIndex}
				/>
				<div className={`${type}-text`}>{children || text}</div>
			</label>
			{errMessage !== false
				? <div className="error-message">{errMessage}</div>
				: null}
		</Container>
	)
;

export default Checkbox;
