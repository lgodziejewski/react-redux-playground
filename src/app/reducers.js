import { combineReducers } from 'redux';
import comments from './containers/CommentsContainer/Comments.reducers';

const appStore = combineReducers({
  comments,
});

export default appStore;
