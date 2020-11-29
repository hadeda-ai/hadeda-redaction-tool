import axios from "axios";

export default axios.create({
  baseURL: "https://team-chakra-thlta.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
    
  }
});
