import React from 'react';

import CustomBox from './common/CustomBox';

const Checkbox = ({
	name,
	tabIndex="0",
	icon,
	className="",
	onChange,
	defaultValue=false,
	type="checkbox",
	text=name,
	children,
	value=name,
	errMessage = "Please check to agree",
	dataset}) => (
		<div className={`input-container ${type} ${className}`}>
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
		</div>
	)
;

export default Checkbox;
