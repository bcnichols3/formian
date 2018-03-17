import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../common/Container';
import ErrorMessage from '../../common/ErrorMessage';

function data(dataset, name) {
	console.log(dataset[name]);
	if (!dataset[name]) return "No File selected";
	if (dataset[name][0]) return dataset[name][0].name;
	return "No File selected";
}

const File = ({
	name, type,
	labelText, errorText, placeholder,
	dataset, accept, tabIndex,
	onChange, onFocus, onBlur,
	icon, style, className, position
}) => (
	<Container type={type} className={className} style={style}>
		<label htmlFor={name}>{labelText || name}</label>
		<input
			id={name}
			type="file"
			tabIndex={tabIndex}
			placeholder={placeholder}
			accept={accept}
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
		/>
		<div className="file-preview">{data(dataset, name)}</div>
		<ErrorMessage errorText={errorText} position={position} />
	</Container>
);

File.defaultProps = {
	name: "file",
	type: "file",
	accept: "",
	labelText: "Upload an attachment",
	errorText: "invalid file",
	className: "",
	tabIndex: "0"
};

export default File;

function fileSize(num) {
	if(num < 1024) return num + ' bytes';
	else if (num > 1024 && num < 1048576) return (num/1024).toFixed(1) + 'KB';
	else if(num > 1048576) return (num/1048576).toFixed(1) + 'MB';
}
