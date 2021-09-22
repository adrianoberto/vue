import axios from "axios";

export default axios.create({
  baseURL: "https://berto-financeiro.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});