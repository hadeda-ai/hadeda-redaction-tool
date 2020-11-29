import axios from "axios";

export default axios.create({
  baseURL: "https://chakradb.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});
