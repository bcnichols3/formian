import React from 'react';

import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = ({siteKey, tabIndex="0", className="", onChange}) => (
	<div name="recaptcha" className={`input-container recaptcha ${className}`}>
		<ReCAPTCHA
			id="recaptcha"
			tabIndex={tabIndex}
			sitekey={siteKey}
			onChange={onChange}
		/>
	</div>
);

export default Recaptcha;
