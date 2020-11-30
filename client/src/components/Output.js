import React, { useState, useEffect } from "react";
import ToothlessDataService from "../services/ToothlessService";
import { Button, Container, Form, Card } from 'react-bootstrap';

const Output = props => {
  const initialToothlessState = {
    id: 100,
    text: "",
    keywords: [],
  };
  const [toothless, setToothless] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [currentToothless, setCurrentToothless] = useState(null);
  const [message, setMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveToothless(props.match.params.id);
    retrieveKeywords(props.match.params.id);
    if(deleted) {
      removeAllToothless(props.match.params.id);
      refreshList(props.match.params.id);
    }
  }, [props.match.params.id, deleted]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentToothless({ ...currentToothless, [name]: value });
  };

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

  const refreshList = id => {
    retrieveToothless(id);
    setCurrentToothless(null);
    setCurrentIndex(-1)
  };

  const removeAllToothless = id => {
    ToothlessDataService.remove(id)
      .then(response => {
        setDeleted(false)
        console.log(response.data.id);
      })
      .catch(e => {
        console.log(e);
      });
  };

var myNewStr;
const keywordReplace = () => {
  var keywordArray = keywords.map((word) => { return word["word"]})
  var myStr = toothless.toString(); 
  for (let i = 0; i < keywordArray.length; i++) {
    var replaceWord = `${keywordArray[i]}`;
    var sRegExInput = new RegExp(replaceWord, 'g');    
    myStr = myStr.replace(sRegExInput , "  ******  "); 
  }
  myNewStr = myStr
  return myNewStr;
}
keywordReplace();
// console.log("output", myNewStr);

const handleDelete = () => {
  setDeleted(state => true)
  console.log(deleted)
};
console.log(deleted)
  return (
    <Container> 
        <div className="edit-form">
          <h2>Output</h2>
          <Form>
          <h3>Original Document</h3>
            <Card htmlFor="text">
              <Card.Body> {toothless} </Card.Body>
            </Card>
          </Form>
          <br/>
          <Form>
          <h3>Redacted Document</h3>
            <Card htmlFor="text">
               Redacted Document
              <Card.Body> {myNewStr} </Card.Body>
            </Card>
          </Form>
          
        <Button
          className="m-3 btn btn-sm btn-danger"
          onClick={handleDelete}
        >
          Remove Redaction
        </Button>
        
        </div>
        </Container>
 )
}
 


export default Output;
