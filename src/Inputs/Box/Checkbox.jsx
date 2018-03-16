import React from 'react';

import CustomBox from '../../common/CustomBox';
import Container from '../../common/Container';
import ErrorMessage from '../../common/ErrorMessage';

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
	position,
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
				<CustomBox name={name} type={type} icon={icon} />
				<div className={`${type}-text`}>{children || text}</div>
			</label>
			<ErrorMessage errMessage={errMessage} position={position}/>
		</Container>
	)
;

export default Checkbox;
