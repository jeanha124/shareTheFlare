export const getComments = (state, photoId) => {
  let commentArr = [];
  const comments = Object.values(state);
  
  comments.forEach(comment => {
    if (comment.photo_id === parseInt(photoId)){
      commentArr.push(comment);
    }
  });

  return commentArr;
};

export const getTags = (state, photoId) => {
  let tagArr = [];
  const tags = Object.values(state);

  tags.forEach(tag => {
    if (tag.photo_id === parseInt(photoId)){
      tagArr.push(tag);
    }
  });

  return tagArr;
};