import { combineReducers } from 'redux';
import comments from './containers/CommentsContainer/Comments.reducers';
import posts from './containers/PostsContainer/Posts.reducers';
import photos from './containers/PhotosContainer/Photos.reducers';

const appStore = combineReducers({
  comments,
  photos,
  posts,
});

export default appStore;
