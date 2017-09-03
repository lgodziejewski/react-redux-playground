import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  commentsActions,
  setCommentsLoading,
  getCommentsFailed,
  getCommentsFinished,
  fetchComments,
} from './Comments.actions';

import data from './Comments.mock';
import { translateComment } from './Comments.reducers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Comments actions', () => {
  describe('it should create actions:', () => {
    it('to set comment loading to true', () => {
      const loading = true;
      const expectedAction = {
        type: commentsActions.LOADING_COMMENTS,
        loading,
      };

      expect(setCommentsLoading(loading)).toEqual(expectedAction);
    });

    it('to set comment loading to false', () => {
      const loading = false;
      const expectedAction = {
        type: commentsActions.LOADING_COMMENTS,
        loading,
      };

      expect(setCommentsLoading(loading)).toEqual(expectedAction);
    });

    it('to set fetch comments failed', () => {
      const error = 'error msg';
      const expectedAction = {
        type: commentsActions.GET_COMMENTS_FAILED,
        error,
      };

      expect(getCommentsFailed(error)).toEqual(expectedAction);
    });

    it('to set fetch comments finished', () => {
      // not interested in field validity here
      const comments = [
        'comment a',
        'comment b',
      ];
      const expectedAction = {
        type: commentsActions.GET_COMMENTS_FINISHED,
        comments,
      };

      expect(getCommentsFinished(comments)).toEqual(expectedAction);
    });
  });

  describe('it should handle async actions', () => {
    afterEach(() => {
      fetch.resetMocks();
    });

    it('successful fetch comments creates GET_COMMENTS_FINISHED', async () => {
      fetch.mockResponse(JSON.stringify(data));

      const expectedActions = [
        {
          type: commentsActions.LOADING_COMMENTS,
          loading: true,
        },
        {
          type: commentsActions.LOADING_COMMENTS,
          loading: false,
        },
        {
          type: commentsActions.GET_COMMENTS_FINISHED,
          comments: data.map(translateComment),
        },
      ];
      const store = mockStore({ comments: [] });

      await store.dispatch(fetchComments());

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('failed fetch comments creates GET_COMMENTS_FAILED', async () => {
      fetch.mockResponse('', { status: 404, statusText: 'Not Found' });

      const expectedActions = [
        {
          type: commentsActions.LOADING_COMMENTS,
          loading: true,
        },
        {
          type: commentsActions.LOADING_COMMENTS,
          loading: false,
        },
        {
          type: commentsActions.GET_COMMENTS_FAILED,
          error: "Error 404: Not Found",
        },
      ];
      const store = mockStore({ comments: [] });

      await store.dispatch(fetchComments());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
