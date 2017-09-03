import data from './Comments.mock';
import { commentsActions } from './Comments.actions';

const comments = (state = [], action) => {
  switch (action.type) {
    case commentsActions.GET_COMMENTS:
      // TODO call fetch and return result
      const newData = data.map(translateComment);

      return [
        ...state,
        ...newData,
      ];
    default:
      return state;
  }
};

const translateComment = (comment) => {
  return {
    id: comment.id,
    title: comment.name,
    body: comment.body,
  }
};

export default comments;
