import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const msp = state => {
  return {
    photo: { title: '', description: '', owner_id: state.session.owner_id, img_url: ''},
    formType:'Add Photo',
  };
};

const mdp = dispatch => {
  return {
    action: photo => dispatch(createPhoto(photo))
  };
};

export default connect(msp, mdp)(PhotoForm);