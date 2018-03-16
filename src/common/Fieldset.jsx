import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';

const Fieldset = ({type, name, labelText, position, style, className, children}) => (
	<fieldset id={name} name={name}>
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
	position: "left",
	className: ""
};

export default Fieldset;
