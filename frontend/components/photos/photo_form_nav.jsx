import React from 'react';
import { Link } from 'react-router-dom';

class PhotoFormNav extends React.Component {
  constructor(props){
    super(props);
  }
  render (){
    if (this.props.navType === 'add') {
      return (
        <div>
          <nav className="add-nav">
            <button id="addLabel" className="btn">
              <Link to='/photos/upload/new'><i className="fas fa-folder-plus plus-fol"></i>Add</Link>
            </button>
            <button id="upload">Upload</button>
          </nav>
        </div>
      ); 
    } else {
      return (
        <div>
          <nav className="change-nav">
            <button id="add-add" className="btn">
              <Link to='/photos/upload/new'><i className="fas fa-folder-plus plus-fol"></i>Add</Link>
            </button>
            <button id="delete"><i className="fas fa-times-circle ex-but"></i>Delete</button>
            <button id="upload1">Upload 1 Photo</button>
          </nav>
        </div>
      );
    }
  }
}

export default PhotoFormNav;