import React from 'react';
import ReactDOM from 'react-dom';

import Formian from '../build/index.js';

function submitHandler() {
	console.log('SUBMITTING FORM', this.state.formData);
}

const Demo = (props) => (
	<Formian.Form className="my-formian-form" onSubmit={submitHandler}>
		<Formian.Checkbox
			name="formianAwesome"
			text="Is Formian Awesome?"
		/>
	</Formian.Form>
);

ReactDOM.render(<Demo />, document.getElementById('main'));
