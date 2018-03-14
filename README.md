An insect-based React module for easy, stylish and accessible controlled forms that closely mimic HTML syntax, and auto-include formatters and front-end validators.

**currently in alpha — use with caution**

**This package requires that your project uses React and probably also Webpack**


# Controlled form elements as React components

## Installation

React Formian is distributed via [npm](https://www.npmjs.com/package/react-formian), with styles distributed on [UNPKG](https://unpkg.com)

```bash
npm install react react-formian
```


## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Formian from 'react-formian';

const submitHandler = function(evt) {
	console.log('hello world', this.state.formData)
}

ReactDOM.renderComponent(
  <Formian.Form onSubmit={submitHandler}>
  	<h1>My Form Title</h1>
	<Formian.Name />
	<Formian.Email />
	<Formian.Checkbox
		name="agree"
		text="Isn't React Formian amazing?"
		required={false}
	/>
	<Formian.Submit />
	<p>My legal text</p>
  </Formian.Form>,
  document.getElementById('main')
)
```

## Styles
Styles for Formian elements are dynamically injected.

## Props

**Props in `[]` are optional**

### `Formian.Form` Component API

**All form input elements are children of `Formian.Form`. You can also put anything else you might need in as a child; `Formian.Form` only manipulates Formian inputs.**

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------  |
|onSubmit |`function`|`undefined`|Required: Non-arrow function that will utilize `this.state.formData` |
|[submitOnChange]|`boolean`|`false`|Runs the onSubmit function after every change, with a two second timeout to reduce calls (useful for applying an auto-save to user settings and the like)                               |
|[className]|`string`|`undefined`|Set a CSS class for custom styles              |

### Common Child Component API

**Some defaults vary type-to-type**

Formian elements are intended to mirror native HTML elements as closely as possible, just with a lot of useful built-in structure (like `<label>`s) and properties (like `tabindex` for mouseless navigation). The hope is you will be able to trust that Formian has fully extended and utilized HTML's [native functionality](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) so these docs may feel (mostly) redundant.

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------  |
|name       |`string`|field type|Required: Key name for the formData object (some child types have a default for ease of use but it's advised to declare names manually)                                                                       |
|[className]|`string`|`''`|Set a CSS class for custom styles                     |
|[text]     |`string`|`name`|Label or Legend text                               |
|[required]|`boolean`|`true`|Submit button is disabled until all required fields have a valid input                                                       |
|[defaultValue]|`boolean` or `string`|`false` or `''`|Value that the form element should initially render with                                                                            |
|[formatter]|`function`|`undefined`|Custom formatter function; manipulates the field value during every onChange event                                         |


### `Formian.Text` Component API

**Shared by `Formian.Email`, `Formian.Name`, `Formian.Number`, `Formian.Password`, `Formian.Phone` and `Formian.TextArea`**

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------  |
|[validator]|`function`|`undefined`|Custom validator function; returns a boolean that asserts an acceptable input. If required is set to `false`, the validator will not run                                                          |
|[placeholder]|`string`|`undefined`|Placeholder text                            |
|[errMessage]|`string` or `false`|`Please enter a valid input`|Invalid input error message text (does not render if false)                                   |

### `Formian.Checkbox` Component API

**Shared by `Formian.OnOff`, a stylized Checkbox**

An option for passing `0` and `1` for MySQL is in the works.

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------  |
|[children]|`react components`|`undefined`|Component to be placed inline with the checkbox; supersedes `text`                                                 |
|[errMessage]|`string` or `false`|`'Please check to agree'`|Invalid input error message text (if false, does not render)                                        |
|[icon]|`URL string` or `React Component`|`'\u2714'`|Custom checkmark icon                                                                            |

### `Formian.Radio` Component API

While you are likely used to declaring Radio buttons one-by-one (like a series of Checkboxes), Formian.Radio creates all radio elements together, wrapped in a `Fieldset`. This means they're declared in your JSX very similarly to a Select, and should tip you off to always ask the question: should this input be a `Radio`, or a `Select`?

For lengthier text, options for bigger buttons or a vertical layout is in the works.

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------  |
|options|`array of strings`|`['option1', 'option2']`|Required: Array of values for this key                                                                             |

### `Formian.Select` Component API

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------  |
|options|`array of strings`|`['option1', 'option2']`|Required: Array of values for this key                                                                             |
|[placeholder]|`string`|`props.type`|Placeholder text                            |
|[errMessage]|`string`|`Please select an option`|Invalid input error message text             |

### `Formian.Range` Component API

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------  |
|[min]|`integer`|`0`|Minimum value for this Range                                                                           |
|[max]|`integer`|`100`|Maximum value for this Range                                                                           |
|[step]|`integer`|`1`|Step at which the Range increments or decrements                                                                      |

**`Formian.Dataset`, `Formian.Date`, animated placeholders, and so much more are coming soon**
