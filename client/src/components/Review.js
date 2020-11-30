import React, { useState, useEffect, useRef } from "react";
import ToothlessDataService from "../services/ToothlessService";
import { Link } from "react-router-dom";
import { Button, Container, Form, InputGroup, FormControl, ToggleButton, ButtonGroup } from 'react-bootstrap';

const ToothlessList = (props) => {

  const [toothless, setToothless] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [redactedWords, setRedactedWords] = useState([]);
  const [currentToothless, setCurrentToothless] = useState(null);
  const [checked, setChecked] = useState(false);  
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveToothless(props.match.params.id);
    retrieveKeywords(props.match.params.id);
  }, [props.match.params.id]);

  const retrieveToothless = id => {
    ToothlessDataService.get(id)
      .then(response => {
        setToothless(response.data.text);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const retrieveKeywords = id => {
    ToothlessDataService.getKeyword(id)
      .then(response => {
        setKeywords(response.data.keywords);
        console.log(response.data.keywords);
      })
      .catch(e => {
        console.log(e);
      });
  };

  console.log(keywords)

  const handleCheck = keyword => {
    setChecked(!checked)
    console.log(setChecked)
    setRedactedWords(...redactedWords, keyword);
    // const { name, value } = keyword.target;
    // setRedactedWords({ ...redactedWords, [name]: value });
    };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(redactedWords);
  }

  return (
    <div>
      <div>
      <Container>
      <h4 className="text-center py-2" >Submitted Text</h4>
      <article>{toothless}</article>
      </Container> 
      <Form onSubmit={handleSubmit} className="my-4">
        <Form.Group controlId="keywordCheckBox">
        <Form.Label as="h3">Terms for redaction</Form.Label>
        {keywords &&
        keywords.map((keyword, index) => (
          <div key={index} className="my-2 mx-2">
            <Form.Check 
            type="checkbox"
            name="id[word]"
            value={keyword}
           >
              <Form.Check.Input type="checkbox" onChange = {() => handleCheck(keyword)} isValid={checked} />
              <Form.Check.Label>{keyword.word}</Form.Check.Label>
            </Form.Check>
          </div>
        ))}
        </Form.Group>      
       
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        </InputGroup.Prepend>
        <FormControl aria-label="Text input with checkbox" />
      </InputGroup>
    </Form>   

          <div>
            <br />
            <p>Please select your redacted words.</p>
            <Link to={`/output/${props.match.params.id}`} className="nav-link">
           <Button type="submit" className="my-2 float-lg-right float-md-right float-sm-right btn-success">
               To Output Page
                 </Button>
                 </Link>
          </div> 
      </div>
    </div>
  );
};

export default ToothlessList;
