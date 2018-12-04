import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


export const receiveComments = id => {
  return dispatch => {
    return CommentApiUtil.fetchComments(id).then(comments => {
      return dispatch({type: RECEIVE_COMMENTS, comments});
    });
  };
};

export const receiveComment = comment => {
  return dispatch => {
    return CommentApiUtil.createComment(comment).then(comment => {
      return dispatch({type: RECEIVE_COMMENT, comment});
    });
  };
};

export const removeComment = commentId => {
  return dispatch => {
    return CommentApiUtil.deleteComment(commentId).then(comment => {
      return dispatch({type: REMOVE_COMMENT, commentId});
    });
  };
};