import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Form, Button } from 'react-bootstrap';

function SubmitInput() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		text: '',
	});
	const [errorMessage, setErrorMessage] = useState('');

	const { name, email, text } = formState;

	function handleChange(e) {
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);

			if (!isValid) {
				setErrorMessage('Your email is invalid.');
			} else {
				setErrorMessage('');
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}

return (
<Form id='submit-form' onSubmit={handleSubmit}>
  <Form.Group controlId="name.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" default={name} placeholder="Jane Doe" onBlur={handleChange}/>
  </Form.Group>

  <Form.Group controlId="email.ControlInput2">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" default={email} placeholder="user@name.com" onBlur={handleChange} />
  </Form.Group>

  <Form.Group controlId="Text.ControlTextarea3">
    <Form.Label> Text area</Form.Label>
    <Form.Control as="textarea" rows={3} default={text} placeholder="Submit Text" onBlur={handleChange} />
  </Form.Group>
  				{errorMessage && (
					<div>
						<p className='error-text'>{errorMessage}</p>
					</div>
				)}
				<Button type='submit' data-testid='text-submit'>
					Submit
				</Button>
</Form>

	);
}

export default SubmitInput;