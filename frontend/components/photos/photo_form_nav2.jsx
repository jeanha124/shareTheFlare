import React from 'react';
import { Link } from 'react-router-dom';

class PhotoFormNav2 extends React.Component {
  constructor(props){
    super(props);
  }
  render (){
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

export default PhotoFormNav2;