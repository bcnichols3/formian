import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';

const Fieldset = ({
	name, type,
	labelText,
	style, className, position,
	children
}) => (
	<fieldset id={name} name={name} className={'fieldset-'+className}>
		{labelText || name
			? <legend>{labelText || name}</legend>
		: null}
		<Container type={type} className={className} style={style}>
			{children}
		</Container>
	</fieldset>
);

Fieldset.defaultProps = {
	type: "fieldset",
	className: ""
};

export default Fieldset;
