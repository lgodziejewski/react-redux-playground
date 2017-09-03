export const postActions = {
  GET_POSTS: 'GET_POSTS',
};

export const getPosts = () => {
  return {
    type: postActions.GET_POSTS,
  };
};
