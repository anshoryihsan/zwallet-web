import axios from "../../Helper/axios";

const TransferRequest = () => {
  return { type: "PROCESS_REQUEST" };
};
const TransferStatus = (data) => {
  return { type: "TRANSFER_STATUS", payload: data };
};
const TransferHistory = (data) => {
  return { type: "TRANSFER_HISTORY", payload: data };
};
const TransferFilter = (data) => {
  return { type: "TRANSFER_FILTER", payload: data };
};
const terminatedata = () => {
  return { type: "LOGOUT" };
};

export const Transfer = (token, data, history) => (dispatch) => {
  dispatch(TransferRequest());
  axios
    .patch("/transfer", data, { headers: { token: `${token}` } })
    .then((res) => {
      if (res.data.success) {
        dispatch(TransferStatus(res.data));
        history.push(`/transfer/status`);
      } else {
        dispatch(TransferStatus(res.data));
      }
    })
    .catch((err) => {
      return dispatch(TransferStatus(err.data));
    });
};

export const HistoryTransfer = (token, page = 0) => (dispatch) => {
  dispatch(TransferRequest());
  axios
    .get(`/transfer?limit=4&page=${page}`, { headers: { token: `${token}` } })
    .then((res) => {
      if (res.data.success) {
        return dispatch(TransferHistory(res.data.data));
      } else {
        return dispatch(TransferHistory(res.data.success));
      }
    })
    .catch((err) => {
      return dispatch(TransferHistory(err.data.success));
    });
};

export const FilterHistory = (token, dateStart, dateEnd, filter) => (
  dispatch
) => {
  axios
    .post(
      `/transfer/filter?start=${dateStart}&end=${dateEnd}&filter=${filter}`,
      filter,
      {
        headers: { token: token },
      }
    )
    .then((res) => {
      if (res.data.success) {
        return dispatch(TransferFilter(res.data.data));
      } else {
        return dispatch(TransferFilter(res.data.success));
      }
    })
    .catch((err) => {
      return dispatch(TransferFilter(err.data.success));
    });
};
export const TerminateData = () => (dispatch) => {
  dispatch(terminatedata());
};
