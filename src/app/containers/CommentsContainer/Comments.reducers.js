import { commentsActions } from './Comments.actions';

export const comments = (state = [], action) => {
  switch (action.type) {
    case commentsActions.GET_COMMENTS_FINISHED:

      return [
        ...state,
        ...action.comments,
      ];
    default:
      return state;
  }
};

export const translateComment = (comment) => {
  return {
    id: comment.id,
    title: comment.name,
    body: comment.body,
  };
};

export const commentsLoading = (state = false, action) => {
  switch (action.type) {
    case commentsActions.LOADING_COMMENTS:
      return action.loading;
    default:
      return state;
  }
};

export const commentsError = (state = '', action) => {
  switch (action.type) {
    case commentsActions.GET_COMMENTS_FAILED:
      return action.error;
    default:
      return state;
  }
};
