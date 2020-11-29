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
  const [currentToothless, setCurrentToothless] = useState(initialToothlessState);
  const [message, setMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveToothless(props.match.params.id);
    retrieveKeywords(props.match.params.id);
  }, [props.match.params.id]);

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

  const refreshList = () => {
    retrieveToothless();
    setCurrentToothless(null);
    setCurrentIndex(-1);
  };

  const removeAllToothless = () => {
    ToothlessDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };
  
var renderValue;
const renderInputText = () => {
    var i;
  for (i = 0; i < toothless.length; i++) { 
    var obj = toothless[i];
    for (var key in obj) { 
      console.log("text", key, obj[key])
      renderValue = obj.text
    }
  }
   return renderValue;
}

renderInputText();
const keywordValues = Object.values(keywords)
let keys =[ ...keywordValues.keys() ];
console.log([keywords[1]]);


var myNewStr;
const keywordReplace = () => {
 // var keyword1 = obsKeysToString(word, keywords, ',');
  var myStr = toothless.toString(); 
  var keyword1 = [ 'Georgina Spooren', 'Eylem Middelkamp', 'J.A.W. Scholten-Hinloopen', 'D.A. Verburg', 'C.C.W. Lange'];
  // var myStr = "Barclays misled shareholders and the public about one of the biggest investments in the bank's history, a BBC Panorama investigation has found.The bank announced in 2008 that Manchester City owner Sheikh Mansour had agreed to invest more than £3bn."
  var i;
  for (i = 0; i < keyword1.length; i++) {
    var replaceWord = `${keyword1[i]}`;
    var sRegExInput = new RegExp(replaceWord, 'g');    
    myStr = myStr.replace(sRegExInput , "******"); 
  }
  myNewStr = myStr
  return myNewStr;
}
keywordReplace();
// console.log("output", myNewStr);

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
          onClick={removeAllToothless}
        >
          Remove All
        </Button>
        
        </div>
        </Container>
 )
}
 


export default Output;
