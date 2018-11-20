import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

export const receiveAllPhotos = () => {
  return dispatch => {
    return PhotoApiUtil.fetchAllPhotos().then(photos => {
      return dispatch({type: RECEIVE_ALL_PHOTOS, photos});
    });
  }; 
};

export const receivePhoto = (id) => {
  return dispatch => {
    return PhotoApiUtil.fetchPhoto(id).then(photo => {
      return dispatch({type: RECEIVE_PHOTO, photo});
    });
  }; 
};

export const createPhoto = (photo) => {
  return dispatch => {
    return PhotoApiUtil.createPhoto(photo).then(photo => {
      return dispatch({type: RECEIVE_PHOTO, photo});
    });
  }; 
};

export const updatePhoto = (photo) => {
  return dispatch => {
    return PhotoApiUtil.updatePhoto(photo).then(photo => {
      return dispatch({type: RECEIVE_PHOTO, photo});
    });
  }; 
};

export const deletePhoto = (photoId) => {
  return dispatch => {
    return PhotoApiUtil.deletePhoto(photoId).then(photo => {
     return dispatch({type: REMOVE_PHOTO, photoId});
    });
  }; 
};

export const createComment = comment => {
  return dispatch => {
    return PhotoApiUtil.createComment(comment).then(comment => {
      return dispatch({type: RECEIVE_COMMENT, comment});
    });
  };
};

export const removeComment = commentId => {
  return dispatch => {
    return PhotoApiUtil.removeComment(commentId).then(comment => {
      return dispatch({type: REMOVE_COMMENT, commentId});
    });
  };
};

export const createTag = tag => {
  return dispatch => {
    return PhotoApiUtil.createTag(tag).then(tag => {
      return dispatch({type: RECEIVE_TAG, tag});
    });
  };
};

export const removeTag = tagId => {
  return dispatch => {
    return PhotoApiUtil.removeTag(tagId).then(tag => {
      return dispatch({type: REMOVE_TAG, tagId});
    });
  };
};
