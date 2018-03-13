import React, {Component} from 'react';

const unicodes = {
	onoff: '',
	checkbox: "\u2714"
};

const CustomBox = (props) => (
	<div className={`${props.type}-custom`}>
		{resolveIcon(props)}
	</div>
);

export default CustomBox;

function resolveIcon(props) {
	if (!props.icon) {
		return <div className="custom-icon" >{unicodes[props.type]}</div>;
	}
	if (props.icon instanceof Object) {
		return props.icon;
	}
	if (typeof props.icon === 'string' && props.icon.test(/^http?s/)) {
		return <img className={`custom-icon ${name}-custom-icon`} src={props.icon} />;
	}
}
