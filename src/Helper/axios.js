import Axios from "axios";

export default Axios.create({
  // baseURL: "wasdqe.herokuapp.com/api/v1",
  baseURL: "http://52.207.113.163:8000/api/v1",
  // baseURL: "http://127.0.0.1:8000/api/v1",
});
