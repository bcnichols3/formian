import React from 'react';

import ReCAPTCHA from 'react-google-recaptcha';

import Container from '../common/Container';

const Recaptcha = ({siteKey, tabIndex="0", className="", style, onChange}) => (
	<Container type="recaptcha" className={className} style={style}>
		<ReCAPTCHA
			id="recaptcha"
			tabIndex={tabIndex}
			sitekey={siteKey}
			onChange={onChange}
		/>
	</Container>
);

export default Recaptcha;
