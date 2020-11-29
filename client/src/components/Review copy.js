import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/ToothlessService";
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

function Select() {
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
  const [tutorials, setTutorials] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTutorials();
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };

  const removeAllTutorials = () => {
    TutorialDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    TutorialDataService.findByTitle(searchTitle)
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

return (
  <div>
        <h4>Tutorials List</h4>

        <ul className="list-group">
          {tutorials &&
            tutorials.map((tutorial, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTutorial(tutorial, index)}
                key={index}
              >
                {tutorial.title}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllTutorials}
        >
          Remove All
        </button>
     

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
    </Form>

            {errorMessage && (
            <div>
              <p className='error-text'>{errorMessage}</p>
            </div>
          )}
          <Button type='submit' data-testid='text-submit'>
            Submit
          </Button>
  </Form>
  </div>
  );
  }
export default Select;