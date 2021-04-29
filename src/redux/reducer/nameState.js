const nameState = {
  name: "Azman",
};

export const nameReducer = (state = nameState, action) => {
  if (action.type === "UPDATE_NAME") return { ...state, name: "Azam" };

  return state;
};
