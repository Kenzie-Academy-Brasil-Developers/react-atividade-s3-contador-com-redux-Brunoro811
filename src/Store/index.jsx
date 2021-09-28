import { createStore, combineReducers } from "redux";

import reducerCounter from "./Modules/Counter/reducer";

const reducers = combineReducers({ number: reducerCounter });
const store = createStore(reducers);
export default store;
