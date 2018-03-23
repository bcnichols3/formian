import React from 'react';
import PropTypes from 'prop-types';

const Container = ({type, className, style, children}) => (
	<div className={`input-container ${type} ${className}`} style={style}>
		{children}
	</div>
);

Container.defaultProps = {
	type: "text",
	classname: ""
};

export default Container;
