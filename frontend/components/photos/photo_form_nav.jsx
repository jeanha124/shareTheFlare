import React from 'react';
import { Link } from 'react-router-dom';

class PhotoFormNav extends React.Component {
  render (){
    return (
      <nav className="add-nav">
          <button id="add">Add</button>
          <button id="upload">Upload</button>
      </nav>
    );
  }
};

export default PhotoFormNav;