import { combineReducers } from "redux";
import dataReducer from "../duck/reducer";



const reducers = combineReducers({
  data: dataReducer,
});

export default reducers;
