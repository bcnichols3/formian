import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../common/Container';
import CustomBox from '../../common/CustomBox';

const OnOff = ({
	name, type,
	labelText, onText, offText,
	dataset, defaultValue, tabIndex,
	onChange, onFocus, onBlur,
	icon, style, className, position,
	children,
}) => (
	<Container type={type} className={className} style={style}>
		<label htmlFor={name}>
			<input
				id={name} type="checkbox"
				name={name}
				tabIndex={tabIndex}
				checked={!!dataset[name]}
				onChange={onChange}
				onBlur={onBlur}
				onFocus={onFocus}
			/>
			<div className={`${type}-custom`}>
				<div className="onoff-custom-wrapper">
					<div className="on-text">{onText}</div>
					<div className="custom-icon" />
					<div className="off-text">{offText}</div>
				</div>
			</div>
			<div className={`${type}-text`}>{children || labelText || name}</div>
		</label>
	</Container>
);

OnOff.propTypes = {
	name: PropTypes.string.isRequired
};

OnOff.defaultProps = {
	type: "onoff",
	required: false,
	onText: "on",
	offText: "off"
};

export default OnOff;
