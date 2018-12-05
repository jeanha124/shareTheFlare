import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { receiveComments, removeComment } from '../../actions/comment_actions';
import { getComments } from '../../reducers/selectors';
import React from 'react';

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    comments: getComments(state) || {},
    errors: state.errors.comments
  };
};

const mdp = dispatch => {
  return {
    fetchComments: id => dispatch(receiveComments(id)),
    deleteComment: id => dispatch(removeComment(id)),
  };
};

class CommentList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: false,
      toggle: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount(){
    this.props.fetchComments(this.props.photoId);
    if (this.props.currentUser) {
      this.setState({currentUser: true});
    } else {
      this.setState({currentUser: false});
    }
  }
  toggle() {
    this.setState({toggle: !this.state.toggle});
  }
  deleteComment() {
    this.props.deleteComment();
  }
  render() {
    const { deleteComment, fetchComments } = this.props;
    const commentListItem = this.props.comments.map(comment => {
      return (
        <CommentListItem key={comment.id} currentUser={this.props.currentUser} comment={comment} fetchComments={this.props.fetchComments} />
      );
    });
    return (
      <React.Fragment>
        <div className="comment-list">
          <ul>
            {commentListItem}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(msp, mdp)(CommentList));