import { legacy_createStore as createStore } from "redux";
import { gemCartReducer } from "./reducers";

export const store = createStore(gemCartReducer);