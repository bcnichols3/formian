import React from 'react';
import ReactDOM from 'react-dom';

import Formian from '../build/index.js';

function submitHandler() {
	console.log('SUBMITTING FORM', this.state.formData);
}

const Demo = (props) => (
	<Formian.Form className="my-formian-form" onSubmit={submitHandler}>
		<Formian.Text
			name="feelings"
			text="How do you feel?"
			placehoder="I feel great"
		/>
		<Formian.Checkbox
			name="formianAwesome"
			text="Is Formian Awesome?"
		/>
		<Formian.Radio
			name="vacations"
			text="Mountains or Beaches?"
			options={["mountains", "beaches"]}
		/>
	</Formian.Form>
);

ReactDOM.render(<Demo />, document.getElementById('main'));
