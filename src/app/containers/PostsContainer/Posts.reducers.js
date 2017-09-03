import data from './Posts.mock';
import { postActions } from './Posts.actions';

const posts = (state = [], action) => {
  switch (action.type) {
    case postActions.GET_POSTS:
      // TODO call fetch and return result
      const newData = data;

      return [
        ...state,
        ...newData,
      ];
    default:
      return state;
  }
};

export default posts;
