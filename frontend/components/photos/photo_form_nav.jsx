import React from 'react';
import { Link } from 'react-router-dom';

class PhotoFormNav extends React.Component {
  constructor(props){
    super(props);
  }
  render (){
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
  }
}

export default PhotoFormNav;