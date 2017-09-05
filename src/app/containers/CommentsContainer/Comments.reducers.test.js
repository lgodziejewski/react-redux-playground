import { commentsActions } from './Comments.actions';
import { comments, commentsLoading, commentsError, translateComment } from './Comments.reducers';

import data from './Comments.mock';

describe('Comments reducers', () => {
  describe('comments', () => {
    it('should properly return initial state', () => {
      expect(comments(undefined, {})).toEqual([]);
    });

    it('should properly add new entries', () => {
      const commentsArray = data.map(translateComment);

      const oldComments = [...commentsArray];

      const action = {
        type: commentsActions.GET_COMMENTS_FINISHED,
        comments: [...commentsArray],
      };

      expect(comments([], action))
        .toEqual([
          ...commentsArray
        ]);

      expect(comments(oldComments, action))
        .toEqual([
          ...commentsArray,
          ...commentsArray,
        ]);
    });
  });

  describe('commentsLoading', () => {
    it('should properly initialize', () => {
      expect(commentsLoading(undefined, {})).toEqual(false);
    });

    it('should properly handle LOADING_COMMENTS', () => {
      let loading = true;
      let action = {
        type: commentsActions.LOADING_COMMENTS,
        loading
      };

      expect(commentsLoading(undefined, action)).toEqual(loading);
      expect(commentsLoading(false, action)).toEqual(loading);

      loading = false;
      action = {
        type: commentsActions.LOADING_COMMENTS,
        loading
      };

      expect(commentsLoading(undefined, action)).toEqual(loading);
      expect(commentsLoading(true, action)).toEqual(loading);
    });
  });

  // TODO similarly for commentsError
});
