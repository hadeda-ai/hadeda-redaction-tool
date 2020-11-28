import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';

function SelectInput() {
  const [formSelect, setFormSelect] = useState({
		name: 'Jane Doe',
		email: 'Jane.Doe@user.com',
		company: 'Secret Company B.V.'
    });
  const [errorMessage, setErrorMessage] = useState('');
  const keyword = formSelect;
  function handleChange(e) {
    setFormSelect({ ...formSelect, [e.target.name]: e.target.value });
    }		
  function handleSubmit(e) {
		e.preventDefault();
		console.log(formSelect);
	}

return (
<Form id='submit-form' onSubmit={handleSubmit}>
{['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`default ${type}`}
      />

      <Form.Check
        type={type}
        id={`default-${type}`}
        label={`default ${type}`}
      />
    </div>
  ))}
  <Form.Group controlId="name.ControlInput1">
    <Form.Label>Input</Form.Label>
    <Form.Control type="keyword" default={keyword[0]} placeholder="Jane Doe" onBlur={handleChange}/>
  </Form.Group>

  <Form.Group controlId="email.ControlInput2">
    <Form.Label>Input</Form.Label>
    <Form.Control type="keyword" default={keyword[1]} placeholder="user@name.com" onBlur={handleChange} />
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
export default SelectInput;