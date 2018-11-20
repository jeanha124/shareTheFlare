import React from 'react';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import { createComment, deleteComment } from '../../actions/photo_actions';

const msp = state => {
  return {
    currentUser: state.entitites.users[state.session.id],
  };
};

const mdp = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: id => dispatch(deleteComment(id))
  };
};


class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tite: '',
      body: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitle(e){
    this.setState({title: e.currentTarget.value});
  }
  handleBody(e){
    this.setState({body: e.currentTarget.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    const photoId = parseInt(this.props.match.params.photoId);
    const comment = merge({}, this.state, {title: this.state.title, body: this.state.body, photo_id: photoId, commenter_id: this.props.currentUser.id});
    this.props.createComment(comment).then(this.setState({tite: '', body: ''}));
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit} className="">
        <br />
        <input type="text" value={this.state.title} onChange={this.handleTitle} placeholder="Add a Title" />
        <br />
        <textarea cols="30" rows="5" value={this.state.body} onChange={this.handleBody()} placeholder="Add a comment"/>
        <br />
        <input type="submit" value="Comment" className="" />
      </form>
    );
  }
}


export default connect(msp, mdp)(Comment);