export const commentsActions = {
  GET_COMMENTS: 'GET_COMMENTS',
};

export const getComments = () => {
  return {
    type: commentsActions.GET_COMMENTS,
  };
};
