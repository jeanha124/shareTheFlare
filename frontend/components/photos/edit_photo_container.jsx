import React from 'react';
import { connect } from 'react-redux';
import DuringUpload from './during_upload';
import { receivePhoto, updatePhoto} from '../../actions/photo_actions';

const msp = (state) => {
  debugger
  const defaultPhoto = { 
    title: '', 
    currentUserId: state.entities.users[state.session.id].id, 
    photoUrl: null, 
    photoFile: null };
  const photo = {title: state.title, description: state.description, photoUrl: state.photoUrl, photoFile: state.photoFile};
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
  constructor(props){
    debugger
    super(props);
    this.photo = this.props.photo;
  }
  componentDidMount() {
    this.props.receivePhoto(this.props.match.params.photoId);
  }
  conponentDidUpdate(prevProps) {
    if (prevProps.photo.id !== this.props.match.params.photoId){
      this.props.receivePhoto(this.props.match.params.postId);
    }
  }
  render(){
    debugger
    const { action, formType, photo } = this.props;
    return (
      <DuringUpload action={action} formType={formType} photo={photo} />
    );
  }
}

export default connect(msp, mdp)(EditPhotoForm);