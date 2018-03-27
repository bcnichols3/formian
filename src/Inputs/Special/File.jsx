import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../common/Container';
import ErrorMessage from '../../common/ErrorMessage';

function getName(dataset, name, placeholder) {
	return dataset[name].length ? dataset[name][0].name : placeholder ;
}

function getInfo(dataset, name) {
	const file = dataset[name].length ? dataset[name][0] : null ;

	if (!file) return "";
	return getSize(file.size)
		+ " "
		+ `Last modified: `
		+ String(file.lastModifiedDate)
			.split(' ')
			.slice(1, 4)
			.join(' ')
		;
}

function getSize(num) {
	if (num < 1024) return num + ' bytes';
	if (num > 1024 && num < 1048576) return (num/1024).toFixed(1) + 'KB';
	if (num > 1048576) return (num/1048576).toFixed(1) + 'MB';
}

const File = ({
	name, type,
	labelText, errorText, placeholder,
	dataset, accept, tabIndex,
	onChange, onFocus, onBlur,
	icon, style, className, position,
	children,
}) => (
	<Container type={type} className={className} style={style}>
		<input
			id={name}
			type="file"
			tabIndex={tabIndex}
			accept={accept}
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
		/>
		<label htmlFor={name}>{labelText || name}</label>
		<div className="file-name">{getName(dataset, name, placeholder)}</div>
		<div className="file-info">{getInfo(dataset, name)}</div>
		{children}
		<ErrorMessage errorText={errorText} position={position} />
	</Container>
);

File.defaultProps = {
	type: "file",
	accept: "",
	defaultValue: [],
	labelText: "Upload File",
	errorText: "Invalid file",
	placeholder: "No file selected",
	className: "",
	tabIndex: "0"
};

export default File;
