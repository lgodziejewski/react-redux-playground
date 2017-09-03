import { api } from '../../constants';
import { translateComment } from './Comments.reducers';

export const commentsActions = {
  LOADING_COMMENTS: 'LOADING_COMMENTS',
  GET_COMMENTS_FINISHED: 'GET_COMMENTS_FINISHED',
  GET_COMMENTS_FAILED: 'GET_COMMENTS_FAILED',
};

export const setCommentsLoading = (loading) => {
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
  const url = `${api.domain}${api.comments}`;

  return async (dispatch) => {

    dispatch(setCommentsLoading(true));
    try {
      const response = await fetch(url);

      dispatch(setCommentsLoading(false));

      if (!response.ok) {
        throw Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      dispatch(getCommentsFinished(data.map(translateComment)));
    } catch (err) {
      dispatch(getCommentsFailed(err.message));
    }
  };
};
