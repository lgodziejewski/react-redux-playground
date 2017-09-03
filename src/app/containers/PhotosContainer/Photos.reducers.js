import { photosActions } from './Photos.actions';

export const photos = (state = [], action) => {
  switch (action.type) {
    case photosActions.GET_PHOTOS_FINISHED:
      const newData = action.photos.map(translatePhoto);

      return [
        ...state,
        ...newData,
      ];
    default:
      return state;
  }
};

const translatePhoto = (photo) => {
  return {
    id: photo.id,
    title: photo.title,
    body: photo.url,
  };
};

export const photosLoading = (state = false, action) => {
  switch (action.type) {
    case photosActions.LOADING_PHOTOS:
      return action.loading;
    default:
      return state;
  }
};

export const photosError = (state = '', action) => {
  switch (action.type) {
    case photosActions.GET_PHOTOS_FAILED:
      return action.error;
    default:
      return state;
  }
};

export const photosPage = (state = 0, action) => {
  switch (action.type) {
    case photosActions.SET_PAGE:
      return action.value;
    default:
      return state;
  }
};

export const photosPageLength = (state = 20, action) => {
  switch (action.type) {
    case photosActions.SET_PAGE_LENGTH:
      return action.value;
    default:
      return state;
  }
};
