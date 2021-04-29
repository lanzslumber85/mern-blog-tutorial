const blogItemsState = {
  blogItems: [],
};

export const blogItemsReducer = (state = blogItemsState, action) => {
  if (action.type === "BLOG_ITEMS")
    return { ...state, blogItems: action.blogItems };

  return state;
};
