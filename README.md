A React module for easy, stylish and accessible controlled forms that mimic HTML syntax, and auto-include formatters and front-end validators. Never waste time on forms again.

This package requires that your project uses React and Webpack.

# Controlled form elements as React components

## Installation

React Formian is distributed via [npm][]:

```bash
npm install react react-formian
```

## Usage

Just as simple as:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Formian from 'react-formian';

const submitHandler = function(evt) {
	window.alert('hello world, here’s your form data', this.state.formData)
}

ReactDOM.renderComponent(
  <Formian.Form onSubmit={submitHandler}>
	<Formian.Name />
	<Formian.Checkbox
		name="agree"
		text="Isn't React Formian amazing?"
		required={false}
	/>
	<Formian.Submit />
  </Formian.Form>,
  document.getElementById('main')
)
```
### Form Component Props

|Prop       |Type    |Default    |Description                                 |
|-----------|:------:|:---------:|--------------------------------------------|
|onSubmit |`function`|`undefined`|Required: Non-arrow function that will utilize `this.state.formData` |
|[submitOnChange]|`boolean`|`false`|Runs the onSubmit function after every change, with a two second timeout to reduce calls |
|[className]|`string`|`undefined`|Set a CSS class for extra styles            |

### Common Child Component Props

**Props in `[]` are optional**

|Prop       |Type    |Default    |Description                                 |
|-----------|:------:|:---------:|--------------------------------------------|
|name       |`string`|`undefined`|Required: Key name for the formData object     |
|[className]|`string`|`undefined`|Set a CSS class for extra styles            |
|[text]     |`string`|`name`|Label or Legend text                        |
|[required]|`boolean`|`true`|Submit button is disabled until all required fields have a valid input                                                     |
|[defaultValue]|`string or boolean`|`'' or false`|Value that the form element should initially render with                                                  |
|[validator]|`function`|`undefined`|Custom validator function; returns a boolean that asserts an acceptable input. If required is set to `false`, the validator will not run                                                        |
|[formatter]|`function`|`undefined`|Custom formatter function; manipulates the field value during every onChange event                                   |


### Field-Type Component Props

**Used by Email, Name, Number, Password, Phone, Text and TextArea**

|Prop       |Type    |Default    |Description                                 |
|-----------|:------:|:---------:|--------------------------------------------|
|[placeholder]|`string`|`undefined`|Placeholder text                          |
|[errMessage]|`string` or `false`|`Please enter a valid input`|Invalid input error message text (does not render if false)           |

### Checkbox Component Props

**Shared by OnOff, a stylized Checkbox**

|Prop       |Type    |Default    |Description                                 |
|-----------|:------:|:---------:|--------------------------------------------|
|[children]|`react components`|`undefined`|Component to be placed inline with the checkbox; supersedes `text`                                               |
|[errMessage]|`string` or `false`|`Please check to agree`|Invalid input error message text (does not render if false)           |
|[icon]|`image URL or React Component`|`undefined`|Custom checkmark icon           |

### Radio Component Props

**Shared by OnOff, a stylized Checkbox**

|Prop       |Type    |Default    |Description                                 |
|-----------|:------:|:---------:|--------------------------------------------|
|options|`array of strings`|`['option1', 'option2']`|Array of values for this key           |

### Array-Type Component Props

**Used by Datalist, Range and Select**

|Prop       |Type    |Default    |Description                                 |
|-----------|:------:|:---------:|--------------------------------------------|
|[placeholder]|`string`|`undefined`|Placeholder text                          |
|[errMessage]|`string`|`undefined`|Invalid input error message text           |
