import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const receiveAllPhotos = () => {
  return dispatch => {
    return PhotoApiUtil.fetchAllPhotos().then(photos => {
      dispatch({type: RECEIVE_ALL_PHOTOS, photos});
    });
  }; 
};

export const receivePhoto = (id) => {
  return dispatch => {
    return PhotoApiUtil.fetchPhoto(id).then(photo => {
      dispatch({type: RECEIVE_PHOTO, photo});
    });
  }; 
};

export const createPhoto = (photo) => {
  return dispatch => {
    return PhotoApiUtil.createPhoto(photo).then(photo => {
      dispatch({type: RECEIVE_PHOTO, photo});
    });
  }; 
};

export const updatePhoto = (photo) => {
  return dispatch => {
    return PhotoApiUtil.updatePhoto(photo).then(photo => {
      dispatch({type: RECEIVE_PHOTO, photo});
    });
  }; 
};

export const deletePhoto = (photoId) => {
  return dispatch => {
    return PhotoApiUtil.deletePhoto(photoId).then(photo => {
      dispatch({type: RECEIVE_PHOTO, photoId});
    });
  }; 
};

