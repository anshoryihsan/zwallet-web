import { combineReducers } from "redux";
import Auth from "./Auth";
import User from "./User";
import Transfer from "./Transfer";
import TopUp from "./TopUp";

const reducers = combineReducers({ Auth, Transfer, TopUp, User });
export default reducers;
