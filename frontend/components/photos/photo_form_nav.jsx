import React from 'react';
import { Link } from 'react-router-dom';
import CreatePhotoFormContainer from './create_photo_form_container';

class PhotoFormNav extends React.Component {
  render (){
    return (
      <nav className="add-nav">
      <label htmlFor="add" id="addLabel" className="btn"><i className="fas fa-folder-plus plus-fol"></i> Add</label>
      <CreatePhotoFormContainer />
          <input type="file" id="add" name="Add" />
          <button id="upload">Upload</button>
      </nav>
    );
  }
};

export default PhotoFormNav;