import React from 'react';
import ReactDOM from 'react-dom';

import Formian from '../../src/index.jsx';
import QueenSVG from './Queen';

function submitHandler(data) {
	console.log('SUBMITTING FORM', data);
}

const buttonStyle = {
	width: "49%",
	display: "inlineBlock",
	margin: "auto"
};

const Demo = (props) => (
	<Formian.Form
		className="my-form"
		onSubmit={submitHandler}
		style={{
			width: "60%",
			position: "relative",
			margin: "auto",
			fontSize: "20px",
			minWidth: "320px"
		}}
	>
		<h1>My Formian Form</h1>
		<Formian.Text
			name="feelings"
			labelText="How Ants Make You Feel"
			errorText="You must share your feelings about ants."
		/>
		<Formian.Email
			labelText="Join Ant Facts"
			placeholder="Your Email"
		/>
		<Formian.OnOff
			name="queen"
			labelText="Activate Ant Queen"
		/>
		<QueenSVG style={{
				position: 'absolute',
				top: '32%',
				right: '-33%',
				transform: 'rotate(-40deg)',
				width: '90%',
				zIndex: '-1',
				fill: 'gray'
			}}
		/>
		<Formian.Radio
			name="movie"
			labelText="Favorite Ant Movie"
			options={["Antz", "Ant Man", "Honey I Shrunk the Kids"]}
		/>
		<Formian.Select
			name="species"
			labelText="Favorite Species of Ant"
			defaultValue={1}
			options={["fire ant", "weaver ant", "carpenter ant"]}
		/>
		<Formian.Checkbox
			name="formianEasy"
			labelText="I agree that Formian is easy to use"
			required={false}
		/>
		<Formian.Text
			name="whatIsThis"
			labelText="What Is This?"
			placeholder="Please type ‘A School for Ants’"
			validator={function(val) {
				return val.toLowerCase().trim() === 'a school for ants';
			}}
			required={false}
		/>
		<Formian.Fieldset>
			<Formian.Submit
				labelText="Do it!"
				style={buttonStyle}
			/>
			<Formian.Reset style={buttonStyle} />
		</Formian.Fieldset>
	</Formian.Form>
);

ReactDOM.render(<Demo />, document.getElementById('main'));
