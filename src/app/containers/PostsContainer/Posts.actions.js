import { api } from '../../constants';

export const postActions = {
  LOADING_POSTS: 'LOADING_POSTS',
  GET_POSTS_FINISHED: 'GET_POSTS_FINISHED',
  GET_POSTS_FAILED: 'GET_POSTS_FAILED',
};

export const postsLoading = (loading) => {
  return {
    type: postActions.LOADING_POSTS,
    loading,
  };
};

export const getPostsFailed = (error) => {
  return {
    type: postActions.GET_POSTS_FAILED,
    error,
  };
};

export const getPostsFinished = (posts) => {
  return {
    type: postActions.GET_POSTS_FINISHED,
    posts,
  };
};

export const fetchPosts = () => {
  const url = `${api.domain}${api.posts}`;

  return async (dispatch) => {

    dispatch(postsLoading(true));
    try {
      const response = await fetch(url);

      dispatch(postsLoading(false));

      if (!response.ok) {
        throw Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      dispatch(getPostsFinished(data));
    } catch (err) {
      dispatch(postsLoading(false));
      dispatch(getPostsFailed(err.message));
    }
  };
};
