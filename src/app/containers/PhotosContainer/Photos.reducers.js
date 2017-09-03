import photosData from './Photos.mock';
import { photosActions } from './Photos.actions';

const photos = (state = [], action) => {
  switch (action.type) {
    case photosActions.GET_PHOTOS:
      // TODO call fetch and return result
      const newData = photosData.map(translatePhoto);

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

export default photos;
