import React from 'react';
import { Link } from 'react-router-dom';

class UploadIndex extends React.Component {
  constructor (props){
    super(props);
    this.state = this.props.photo;
  }
  
  render(){
    return (
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
    ); 
  }
}

export default UploadIndex;