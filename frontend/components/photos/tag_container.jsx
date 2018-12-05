import React from 'react';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import { createTag, deleteTag } from '../../actions/photo_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = dispatch => {
  return {
    createTag: tag => dispatch(createTag(tag)),
    deleteTag: id => dispatch(deleteTag(id))
  };
};

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const photoId = parseInt(this.props.match.params.photoId);
    const tag = merge({}, this.state, {title: this.state.title, photo_id: photoId });
    this.props.createTag(tag).then(this.setState({ title: '' }));
  }
  updateTitle(e) {
    this.setState({title: e.currentTarget.value});
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit} className="">
        <br />
        <input type="text" value={this.state.title} onChange={this.updateTitle} placeholder="Add a tag" className="" />
        <input type="submit" value="Tag" className="" />
      </form>
    );
  } 
}



export default withRouter(connect(msp, mdp)(Tag));