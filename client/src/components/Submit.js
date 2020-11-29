import React, { useState, useEffect } from "react";
import ToothlessDataService from "../services/ToothlessService";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Submit = () => {
  const initialToothlessState = {
    id: null,
    text: ""
  };
  const [toothless, setToothless] = useState(initialToothlessState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setToothless({ ...toothless, [name]: value });
  };

  const saveToothless = () => {
    var data = {
      text: toothless.text,
      id: toothless.id
    };

    ToothlessDataService.create(data)
      .then(response => {
        setToothless({
          text: response.data.text,
          id: response.data.id
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 20000));
  }
  
  function LoadingButton() {
  
    useEffect(() => {
      if (submitted) {
        simulateNetworkRequest().then(() => {
          setSubmitted(false);
        });
      }
    }, [submitted]);
  
    const handleClick = () => setSubmitted(true);
  
    return (
      <Button
        variant="success"
        disabled={submitted}
        onClick={!submitted ? handleClick : null}
      >
        {submitted ? 'Loading…' : 'Click to Submit'}
      </Button>
    );
  }

  const newToothless = () => {
    setToothless(initialToothlessState);
    setSubmitted(false);
  };
  
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          
          <Link to={`/review/${toothless.id}`} className="nav-link">
      <Button className="my-2 float-lg-right float-md-right float-sm-right btn-success">
          To Review Page
            </Button>
            </Link>
        </div>
      ) : (
        <div>
             <h1>Submit Page </h1>
              <div className="col-auto"> 
                <h3>How to use document submission page?</h3>
                <h5 className="py-2">
                This cleaning document application will redact private words from your documents for public consumption.
                Once you have uploaded your text for clearning, a <span className="mx-1 badge-pill btn-success">Review</span> 
                button will appear. Click on the button to review your document. This tool uses both the user 
                input and a Natural Language Processing to identify the interesting fields for redaction.
            </h5>
            </div>
          
          <div className="form-group">
            <label htmlFor="text">Paste Text Here:</label>
            <input
              type="textarea"  
              className="form-control"          
              id="text"
              required
              value={toothless.text}
              onChange={handleInputChange}
              name="text"
            />
             <button onClick={saveToothless} className="my-3 btn btn-success">
            Submit
          </button>
          <LoadingButton  />
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Submit;
