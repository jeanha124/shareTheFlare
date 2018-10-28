import React from 'react';
import { Link } from 'react-router-dom';

class BeforeUpload extends React.Component {
  render(){
    return (
      <React.Fragment>
        <nav className="add-nav">
          <button id="addLabel" className="btn">
            <Link to='/photos/upload/new'><i className="fas fa-folder-plus plus-fol"></i>Add</Link>
          </button>
          <button id="upload">Upload</button>
        </nav>
        <div className="content-content">
          <div className="add-content">
            <div className="add-content-content">
              <button id="add1" id="content-upload">
                <Link to='/photos/upload/new'>
                  Choose photos and videos to upload
                </Link>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BeforeUpload;