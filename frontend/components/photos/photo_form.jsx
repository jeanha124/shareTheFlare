import React from 'react';
import { withRouter } from 'react-router-dom';

class PhotoForm extends React.Component {
  constructor (props){
    super(props);
    this.state = this.props.photo;
  }
  
  render(){
    return (
      <div className="content-content">
        <div className="add-content">
          <div className="add-content-content">
            <label htmlFor="add1" id="content-upload">
              Choose photos and videos to upload
            </label>
            <input type="file" id="add1" name="add"/>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(PhotoForm);


