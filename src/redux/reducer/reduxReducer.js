import { initialState } from "../store/store";

export const reduxReducer = () => {
  return (state = initialState, action) => {
    if (action.type === "BLOG_ITEMS")
      return { ...state, blogItems: action.blogItems };

    if (action.type === "UPDATE_NAME") return { ...state, name: "Azam" };

    return state;
  };
};
