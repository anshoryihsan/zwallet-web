const initialState = {
  howtopup: [],
  loading: false,
};

const Transfer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "TOPUP_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_DATA_TOPUP":
      return {
        ...state,
        loading: false,
        howtopup: action.payload.data,
      };
    default:
      return state;
  }
};
export default Transfer;
