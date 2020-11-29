import React, { useState, useEffect } from "react";
import ToothlessDataService from "../services/ToothlessService";
import { Link } from "react-router-dom";
import { Button, Container, Form } from 'react-bootstrap';

const ToothlessList = (props) => {

  console.log(props);

  const [toothless, setToothless] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [currentToothless, setCurrentToothless] = useState(null);
  const [currentKeywords, setCurrentKeywords] = useState(null);
  
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveToothless(props.match.params.id);
    retrieveKeywords(props.match.params.id);
  }, [props.match.params.id]);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
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
  // const retrieveToothless = () => {
  //   ToothlessDataService.getAll()
  //     .then(response => {
  //       setToothless(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

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

  // const retrieveKeywords = () => {
  //   ToothlessDataService.getAllKeywords()
  //     .then(response => {
  //       setKeywords(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  console.log(keywords)

  const refreshList = () => {
    retrieveToothless();
    retrieveKeywords();
    setCurrentToothless(null);
    setCurrentIndex(-1);
  };

  const setActiveKeyword = (keyword, index) => {
    setCurrentKeywords(keyword);
    setCurrentIndex(index);
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

  const findByTitle = () => {
    ToothlessDataService.findByTitle(searchTitle)
      .then(response => {
        setToothless(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      <div>
      <Container>
      <h4 className="text-center py-2" >Submitted Text</h4>
      <article>{toothless}</article>

      </Container> 
      <Form>
      <h4 className="text-center py-2" >Redacted Terms</h4>
    {keywords &&
        keywords.map((keyword, index) => (
            <Form.Check className="my-2 ml-3" custom key={index} label={keyword.word} />
        ))}

    </Form>   
     
      <div className="col-md-6">
        {currentToothless ? (
          <div>
            <h4>Keyword options</h4>
            <div>
              <label>
                <strong>Text:</strong>
              </label>{" "}
              {currentToothless.text}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentToothless.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentToothless.published ? "Published" : "Pending"}
            </div>

            <Link
              to={"/api/toothless/" + currentToothless.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please select your redacted words.</p>
            <Link to={"/output"} className="nav-link">
           <Button className="my-2 float-lg-right float-md-right float-sm-right btn-success">
               To Output Page
                 </Button>
                 </Link>
          </div> 
        )}
      </div>
    </div>
    </div>
  );
};

export default ToothlessList;
