export const fetchAllPhotos = () => {
  return $.ajax ({
    method: 'GET',
    url: 'api/photos'
  });
};

export const fetchPhoto = (id) => {
  return $.ajax ({
    method: 'GET',
    url: `api/photos/${id}`
  });
};

export const createPhoto = (photo) => {
  return $.ajax ({
    method: 'POST',
    url: `api/photos`,
    data: photo,
    contentType: false,
    processData: false
  });
};

export const updatePhoto = (photo) => {
  return $.ajax ({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: { photo }
  });
};

export const deletePhoto = (photoId) => {
  return $.ajax ({
    method: 'DELETE',
    url: `api/photos/${photoId}`,
  });
};


export const createComment = comment => {
  return $.ajax ({
    method: 'POST',
    url: `api/photos/${comment.photo_id}/comments`,
    data: { comment }
  });
};

export const deleteComment = id => {
  return $.ajax ({
    method: 'DELETE',
    url: `api/comments`,
  });
};

export const createTag = tag => {
  return $.ajax ({
    method: 'POST',
    url: `api/photos/${tag.photo_id}/tags`,
    data: { tag }
  });
};

export const deleteTag = id => {
  return $.ajax ({
    method: 'DELETE',
    url: `api/tags`,
  });
};