An insect-based module for creating controlled web forms for React.

* Easy to write; easy to read
* Pre-packed with front-end formatters and validators
* Auto-injects styles (override without using `!important`)
* Easy to customize
* Mirrors HTML syntax

**currently in alpha — use with caution**

**This package requires that your project uses React**

# Controlled form elements as React components

[See Live Demo](https://bcnichols3.github.io/react-formian/example/public/index.html)

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

const submitHandler = function(formData) {
	console.log('hello world', formData)
}

ReactDOM.renderComponent(
  <Formian.Form onSubmit={submitHandler}>
  	<h1>My Form Title</h1>
	<Formian.Name />
	<Formian.Email />
	<Formian.Checkbox
		name="agree"
		labelText="Aren't ants amazing?"
		required={false}
	/>
	<Formian.Submit />
	<p>My legal text</p>
  </Formian.Form>,
  document.getElementById('main')
)
```

## Styles
Styles for Formian elements are dynamically injected. Prevent their injection and write your own, simply by adding `customStyles={true}` to your Formian.Form element.

You can also pre-require Formain's styles by adding a stylesheet link to your HTML document and pointing the href to `https://unpkg.com/react-formian@[your version]/build/style.css`, and then setting `customStyles` to `true`, as above.

Each container is wrapped in an identical manner, with a `div` that has a class of `input-container` as well as the input type and subtype.

## Props

**Props in brackets (`[ ]`) are optional**

### `Formian.Form` Component API

**All form input elements are children of `Formian.Form`. You can also put anything else you might need in as a child, as `Formian.Form` only manipulates form inputs.**

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------  |
|onSubmit |`function`|`undefined`|Required: function that will utilize one argument: `formData`                                                            |
|[className]|`string`|`""`|Set a CSS class for custom styles                    |
|[submitOnChange]|`boolean`|`false`|Runs the onSubmit function after every change, with a two second timeout. Use for auto-saving the form.                |
|[customStyles]|`boolean`|`false`|Used to prevent Formain's native styles from being injected on the page                                                      |

### Common Child Component API

Formian elements are intended to mirror native HTML elements as closely as possible, just with a lot of useful built-in structure and accessibility properties (e.g. `tabindex` for mouse-less navigation). The hope is you will be able to trust that Formian has fully extended and utilized HTML's [native functionality](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) so these docs may feel (mostly) redundant.

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------  |
|name       |`string`|`undefined`|Required: Key name for the formData object (some child types have a default for ease of use but it’s recommended to declare names manually)                                                         |
|[className]|`string`|`""`|Set a CSS class for custom styles                    |
|[labelText]|`string`|`name`|Label or Legend text                               |
|[required]|`boolean`|`true`|Submit button is disabled until all required fields have a valid input                                                       |
|[formatter]|`function`|`undefined`|Custom formatter function; manipulates the field value during every onChange event                                         |

### `Formian.Text` Component API

**Shared by `Formian.Email`, `Formian.Number`, `Formian.Password`, `Formian.Tel` and `Formian.TextArea`**

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------	|
|[defaultValue]|`string`|`""`|Value that the form element should initially render with                                                                     |
|[placeholder]|`string`|`""`|Placeholder text                                   |
|[errorText]|`string` or `false`|`"Please enter a valid input"`|Invalid input error message text (does not render if false)                                   |
|[validator]|`function`|`undefined`|Custom validator function; returns a boolean that asserts an acceptable input. If `required` is set to `false`, the validator will not run                                                          |

Common fields like Email, Text, Tel, etc ... are designed to be as easy to use as possible and (assuming no customization needs) require nothing besides being called as a child of `Formian.Form`. However, for the sake of readability, it's advised you always declare a name manually in your JSX, so coders can easily associate an input with its corresponding key in the `formData` object.

### `Formian.Checkbox` Component API

**Shared by `Formian.OnOff`, a stylized Checkbox**

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------  |
|[defaultValue]|`boolean`|`false`|Value that the form element should initially render with                                                                     |
|[children]|`react components`|`undefined`|Component to be placed inline with the checkbox; supersedes `labelText`                                            |
|[errorText]|`string` or `false`|`"Please check to agree"`|Invalid input error message text (if `false`, does not render)                                      |
|[icon]|`URL string` or `React Component`|`'\u2714'`|Custom checkmark icon                                                                            |
|[tinyInt]|`boolean`|`false`|Field returns `1` or `0` instead of `true` or `false`                                                                         |

### `Formian.Radio` Component API

While you are likely used to declaring Radio buttons one-by-one (like a series of Checkboxes), Formian.Radio creates all radio elements together, wrapped in a `Fieldset`. This means they're declared in your JSX very similarly to a Select, and should tip you off to always ask the question: should this input be a `Radio`, or a `Select`?

For lengthier text, options for bigger buttons or a vertical layout is in the works.

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------  |
|options|`array of strings`|`undefined`|Required: Array of values for this key                                                                             |
|[defaultValue]|`integer`|`0`|Value as an index of the options array with which the form element should initially render                                        |

### `Formian.Select` Component API

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------  |
|options|`array of strings`|`undefined`|Required: Array of values for this key  |
|[defaultValue]|`integer`|`0`|Value as an index of the options array with which the form element should initially render                                        |
|[placeholder]|`string`|`""`|Placeholder text                                   |
|[errorText]|`string`|`Please select an option`|Invalid input error message text                                                                            |

### `Formian.Range` Component API

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------  |
|[defaultValue]|`integer`|`0`|Value the slider will initially render on         |
|[min]|`integer`|`0`|Minimum value for this Range                               |
|[max]|`integer`|`100`|Maximum value for this Range                             |
|[step]|`integer`|`1`|Step at which the Range increments or decrements          |

### `Formian.Submit` Component API

Triggers your `onSubmit` function. This button is grayed out until all required fields have a valid value, and `onSubmit` is not called. If Submit is clicked when this is not true, all erroneous form inputs will be highlighted, and display their error text, until they're focused.

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------  |
|[labelText]|`string`|`""`|Text displayed on the button; supersedes `value`     |
|[value]|`string`|`Submit`|Text displayed on the button                         |

### `Formian.Reset` Component API

Resets all your fields to their default state. This button is grayed out and unclickable until the form is not in a default state. This button is a great addition to all kinds of user settings interfaces.

|Prop       |Type    |Default    |Description                                   |
|-----------|:------:|:---------:|--------------------------------------------  |
|[labelText]|`string`|`""`|Text displayed on the button; supersedes `value`     |
|[value]|`string`|`Restore Defaults`|Text displayed on the button               |

## Coming soon

**`Formian.Dataset`, `Formian.Date`, rerender optimizations, easily customized colors, animated placeholders, and so much more are on the horizon**
