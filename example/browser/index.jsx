import React from 'react';
import ReactDOM from 'react-dom';

import Formian from '../../src/index.jsx';

function submitHandler(data) {
	console.log('SUBMITTING FORM', data);
}

const Demo = (props) => (
	<Formian.Form
		className="my-form"
		onSubmit={submitHandler}
		style={{
			width: "50%",
			margin: "auto",
			fontSize: "20px",
			minWidth: "300px"
		}}
	>
		<h1>My Formian Form</h1>
		<Formian.Text
			name="feelings"
			text="How You Feel"
			placeholder="I feel..."
			errMessage="At least tell me how you feel..."
		/>
		<Formian.Email />
		<Formian.Checkbox
			name="formianAwesome"
			text="Is Formian Awesome?"
			required={false}
		/>
		<Formian.OnOff
			name="carpeDiem"
			text="Seize the Day"
			errMessage="Do it!"
		/>
		<Formian.Radio
			name="vacations"
			text="Vacation Preference"
			options={["mountains", "beaches"]}
		/>
		<Formian.Select
			name="color"
			text="Favorite Color"
			defaultValue="4"
			options={["red", "orange", "yellow", "green", "blue", "violet"]}
		/>
		<Formian.Submit
			text="Do it!"
			style={{
				width: "50%",
				margin: "auto"
			}}
		/>
	</Formian.Form>
);

ReactDOM.render(<Demo />, document.getElementById('main'));
