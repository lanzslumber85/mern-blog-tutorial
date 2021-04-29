import { combineReducers } from "redux";
import { blogItemsReducer } from "./blogItemsState";
import { nameReducer } from "./nameState";

export const reducer = combineReducers({ blogItemsReducer, nameReducer });
