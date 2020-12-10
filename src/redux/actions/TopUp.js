import axios from "../../Helper/axios";

const TopUpRequest = () => {
  return { type: "TOPUP_REQUEST" };
};
const GetTopUp = (data) => {
  return { type: "GET_DATA_TOPUP", payload: data };
};

export const howTopUp = (token) => (dispatch) => {
  dispatch(TopUpRequest());
  axios
    .get("/top-up", { headers: { token: `${token}` } })
    .then((res) => {
      console.log(res.data, "hasil");
      if (res.data.success) {
        // const data = res.data;
        dispatch(GetTopUp(res.data));
        // console.log(data.data[0]);
      } else {
        const message = res.data.data;
        dispatch(GetTopUp(message));
      }
    })
    .catch((err) => {
      // const message = err.message;
      dispatch(GetTopUp(err.data));
    });
};
