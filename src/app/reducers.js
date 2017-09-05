import { combineReducers } from 'redux';
import { comments, commentsLoading, commentsError } from './containers/CommentsContainer/Comments.reducers';
import { posts, postsLoading, postsError } from './containers/PostsContainer/Posts.reducers';
import {
  photos,
  photosLoading,
  photosError,
  photosPage,
  photosPageLength,
} from './containers/PhotosContainer/Photos.reducers';

const appStore = combineReducers({
  comments,
  commentsLoading,
  commentsError,
  photos,
  photosLoading,
  photosError,
  photosPage,
  photosPageLength,
  posts,
  postsLoading,
  postsError,
});

export default appStore;
