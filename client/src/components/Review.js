import React, { useState, useEffect } from "react";
import ToothlessDataService from "../services/ToothlessService";
import { Link } from "react-router-dom";
import { Button, Container, Form, InputGroup, FormControl, ToggleButton, ButtonGroup } from 'react-bootstrap';

const ToothlessList = (props) => {

  console.log(props);

  const [toothless, setToothless] = useState([]);
  const [keywords, setKeywords] = useState([]);
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

  const refreshList = () => {
    retrieveToothless();
    retrieveKeywords();
    setCurrentToothless(null);
    setCurrentIndex(-1);
  };

  const handleCheck = () => setChecked(!checked)

  return (
    <div>
      <div>
      <Container>
      <h4 className="text-center py-2" >Submitted Text</h4>
      <article>{toothless}</article>
      </Container> 
      <Form className="my-4">
        <Form.Group controlId="keywordCheckBox">
        <Form.Label as="h3">Interesting Terms for redaction</Form.Label>
        {keywords &&
        keywords.map((keyword, index) => (
          <div  key={index} clasName="my-2 mx-5">
            <Form.Check 
            type="checkbox"
            name="checkbox"
            onChange={handleCheck}>
              <Form.Check.Input type="checkbox" isValid={checked}/>
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
