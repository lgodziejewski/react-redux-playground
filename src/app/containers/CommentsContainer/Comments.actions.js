export const commentsActions = {
  LOADING_COMMENTS: 'LOADING_COMMENTS',
  GET_COMMENTS_FINISHED: 'GET_COMMENTS_FINISHED',
  GET_COMMENTS_FAILED: 'GET_COMMENTS_FAILED',
};

export const commentsLoading = (loading) => {
  return {
    type: commentsActions.LOADING_COMMENTS,
    loading,
  };
};

export const getCommentsFailed = (error) => {
  return {
    type: commentsActions.GET_COMMENTS_FAILED,
    error,
  };
};

export const getCommentsFinished = (comments) => {
  return {
    type: commentsActions.GET_COMMENTS_FINISHED,
    comments,
  };
};

export const fetchComments = () => {
  const url = 'http://jsonplaceholder.typicode.com/comments';

  return async (dispatch) => {

    dispatch(commentsLoading(true));
    try {
      const response = await fetch(url);

      dispatch(commentsLoading(false));

      if (!response.ok) {
        throw Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      dispatch(getCommentsFinished(data));
    } catch (err) {
      dispatch(commentsLoading(false));
      dispatch(getCommentsFailed(err.message));
    }
  };
};
