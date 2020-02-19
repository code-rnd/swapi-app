import { combineReducers } from "redux";
import { swReducers } from "./sw";

export const reducers = combineReducers({
  sw: swReducers
});
