import React from 'react';

const Container = ({type="text", className="", style={}, children}) => (
	<div className={`input-container ${type} ${className}`} style={style}>
		{children}
	</div>
);

export default Container;
