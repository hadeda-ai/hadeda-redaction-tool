import React, { useState, useEffect } from "react";
import ToothlessDataService from "../services/ToothlessService";
import { Link } from "react-router-dom";

const Output = () => {
  const [toothless, setToothless] = useState([]);
  const [currentToothless, setCurrentToothless] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    retrieveToothless();
  }, []);

  const onChangeSearchText = e => {
    const searchText = e.target.value;
    setSearchText(searchText);
  };

  const retrieveToothless = () => {
    ToothlessDataService.getAll()
      .then(response => {
        setToothless(response.data);
        console.log(response.data);
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

  const setActiveToothless = (tooth, index) => {
    setCurrentToothless(tooth);
    setCurrentIndex(index);
  };

  const findByText = () => {
    ToothlessDataService.findByText(searchText)
      .then(response => {
        setToothless(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by ID"
            value={searchText}
            onChange={onChangeSearchText}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByText}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Toothless List</h4>

        <ul className="list-group">
          {toothless &&
            toothless.map((tooth, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveToothless(tooth, index)}
                key={index}
              >
                {tooth.text}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllToothless}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentToothless ? (
          <div>
            <h4>Toothless</h4>
            <div>
              <label>
                <strong>Text:</strong>
              </label>{" "}
              {currentToothless.text}
            </div>
            <div>
              <label>
                <strong>Redacted Words:</strong>
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
              to={"/toothless/" + currentToothless.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Redacted document</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Output;
