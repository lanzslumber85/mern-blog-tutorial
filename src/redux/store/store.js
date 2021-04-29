import { reduxReducer } from "../reducer/reduxReducer";

const { createStore } = require("redux");

export const initialState = {
  blogItems: [],
  name: "Azman",
};

const reducer = reduxReducer();

const store = createStore(reducer);

export default store;
