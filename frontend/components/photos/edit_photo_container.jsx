import React from 'react';
import { connect } from 'react-redux';
import DuringUpload from './during_upload';
import { receivePhoto, updatePhoto} from '../../actions/photo_actions';

const msp = (state, ownProps) => {
  const defaultPhoto = { title: '', currentUserId: state.entities.users[state.session.id].id, photoUrl: null, photoFile: null };
  const photo = state.photos[ownProps.match.params.photoId] || defaultPhoto;
  const formType = 'Update Photo';

  return { photo, formType };
};

const mdp = dispatch => {
  return {
    receivePhoto: id => dispatch(receivePhoto(id)),
    action: photo => dispatch(updatePhoto(photo)),
  };
};

class EditPhotoForm extends React.Component {
  componentDidMount() {
    this.props.receivePhoto(this.props.match.params.photoId);
  }
  conponentDidUpdate(prevProps) {
    if (prevProps.photo.id != this.props.match.params.photoId){
      this.props.receivePhoto(this.props.match.params.postId);
    }
  }
  render(){
    const { action, formType, photo } = this.props;
    return (
      <DuringUpload action={action} formType={formType} photo={photo} />
    );
  }
}

export default connect(msp, mdp)(EditPhotoForm);