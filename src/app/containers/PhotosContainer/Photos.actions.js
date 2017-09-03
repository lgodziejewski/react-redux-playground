export const photosActions = {
  GET_PHOTOS: 'GET_PHOTOS',
};

export const getPhotos = () => {
  return {
    type: photosActions.GET_PHOTOS,
  };
};
