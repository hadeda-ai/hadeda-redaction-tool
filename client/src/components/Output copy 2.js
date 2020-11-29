import React, { useState, useEffect } from "react";
import ToothlessDataService from "../services/ToothlessService";

const Review = props => {
  const initialToothlessState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentToothless, setCurrentToothless] = useState(initialToothlessState);
  const [message, setMessage] = useState("");

  const getToothless = id => {
    ToothlessDataService.get(id)
      .then(response => {
        setCurrentToothless(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getToothless(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentToothless({ ...currentToothless, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentToothless.id,
      title: currentToothless.title,
      description: currentToothless.description,
      published: status
    };

    ToothlessDataService.update(currentToothless.id, data)
      .then(response => {
        setCurrentToothless({ ...currentToothless, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateToothless = () => {
    ToothlessDataService.update(currentToothless.id, currentToothless)
      .then(response => {
        console.log(response.data);
        setMessage("The toothless was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteToothless = () => {
    ToothlessDataService.remove(currentToothless.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/api/toothlesss");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentToothless ? (
        <div className="edit-form">
          <h4>Toothless</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentToothless.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentToothless.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentToothless.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentToothless.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteToothless}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateToothless}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Toothless...</p>
        </div>
      )}
    </div>
  );
};

export default Review;
