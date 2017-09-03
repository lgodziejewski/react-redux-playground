import data from './Comments.mock';

export const actions = {
  GET_DATA: 'GET_DATA',
};

const comments = (state = [], action) => {
  switch (action.type) {
    case actions.GET_DATA:
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
