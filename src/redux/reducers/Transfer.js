const initialState = {
  // data: [],
  statustransfer: {},
  transferhistory: {},
  historyfilter: {},
  loading: false,
};

const Transfer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PROCESS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "TRANSFER_STATUS":
      return {
        ...state,
        statustransfer: payload,
        loading: false,
      };
    case "TRANSFER_HISTORY":
      return {
        ...state,
        transferhistory: payload,
        loading: false,
      };
    case "TRANSFER_FILTER":
      return {
        ...state,
        historyfilter: payload,
        loading: false,
      };

    case "LOGOUT":
      return {
        ...state,
        statustransfer: {},
        transferhistory: {},
        historyfilter: {},
        loading: false,
      };
    default:
      return state;
  }
};
export default Transfer;
