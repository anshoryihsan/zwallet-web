import Axios from "axios";

export default Axios.create({
  baseURL: "wasdqe.herokuapp.com/api/v1",
});

// export default Axios.create({
//   baseURL: "http://localhost:8000/api/v1",
// });
