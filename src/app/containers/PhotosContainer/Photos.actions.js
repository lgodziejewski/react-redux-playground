import { api } from '../../constants';

export const photosActions = {
  LOADING_PHOTOS: 'LOADING_PHOTOS',
  GET_PHOTOS_FINISHED: 'GET_PHOTOS_FINISHED',
  GET_PHOTOS_FAILED: 'GET_PHOTOS_FAILED',
  SET_PAGE: 'SET_PAGE',
  SET_PAGE_LENGTH: 'SET_PAGE_LENGTH',
};

export const photosLoading = (loading) => {
  return {
    type: photosActions.LOADING_PHOTOS,
    loading,
  };
};

export const getPhotosFailed = (error) => {
  return {
    type: photosActions.GET_PHOTOS_FAILED,
    error,
  };
};

export const getPhotosFinished = (photos) => {
  return {
    type: photosActions.GET_PHOTOS_FINISHED,
    photos,
  };
};

export const fetchPhotos = () => {
  const url = `${api.domain}${api.photos}`;

  return async (dispatch) => {

    dispatch(photosLoading(true));
    try {
      const response = await fetch(url);

      dispatch(photosLoading(false));

      if (!response.ok) {
        throw Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      dispatch(getPhotosFinished(data));
    } catch (err) {
      dispatch(photosLoading(false));
      dispatch(getPhotosFailed(err.message));
    }
  };
};

export const setPage = (event) => {
  const value = Number(event.target.value);

  return {
    type: photosActions.SET_PAGE,
    value,
  };
};

export const setPageLength = (event) => {
  const value = Number(event.target.value);

  return {
    type: photosActions.SET_PAGE_LENGTH,
    value,
  };
};
