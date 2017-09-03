import { postActions } from './Posts.actions';

export const posts = (state = [], action) => {
  switch (action.type) {
    case postActions.GET_POSTS_FINISHED:

      return [
        ...state,
        ...action.posts,
      ];
    default:
      return state;
  }
};

export const postsLoading = (state = false, action) => {
  switch (action.type) {
    case postActions.LOADING_POSTS:
      return action.loading;
    default:
      return state;
  }
};

export const postsError = (state = '', action) => {
  switch (action.type) {
    case postActions.GET_POSTS_FAILED:
      return action.error;
    default:
      return state;
  }
};
