import { actions } from './Comments.reducers';

export const getData = () => {
  return {
    type: actions.GET_DATA,
  };
};
