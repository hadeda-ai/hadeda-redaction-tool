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

function obsKeysToString(o, k, sep) {
  // iterate over key array
  return k.map(function(key) {
     // get object property value 
     return o[key];
     // filter out non-empty and defined property
   }).filter(function(v) {
     return v;
     // join the property value array with the separator
   }).join(sep);
 }

 let word='';

var myNewStr;
const keywordReplace = () => {
  var keyword1 = obsKeysToString(word, keywords, ',');
  var myStr = toothless.toString(); 
// var keyword1 = [ 'Barclays', 'BBC Panorama', 'Manchester', 'Sheikh Mansour', 'Abu Dhabi', 'RBS', 'Lloyds TSB', 'Qatar'];
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
          <h4>Output</h4>
          <Form>
            <Card htmlFor="text">
               Original Document
              <Card.Body> {toothless} </Card.Body>
            </Card>
          </Form>
          <br/>
          <Form>
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
