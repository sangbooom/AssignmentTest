import { combineReducers } from "redux";
import problem from "./problem";

const rootReducer = combineReducers({
  problem,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
