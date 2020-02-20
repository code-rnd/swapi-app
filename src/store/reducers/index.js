import { combineReducers } from "redux";
import { swReducers } from "./sw";
import { googleReducers } from "./google";

export const reducers = combineReducers({
  sw: swReducers,
  google: googleReducers
});
