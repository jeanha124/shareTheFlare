import React from 'react';

class CreateFormSidebar extends React.Component {
  render(){
    return (
      <div className="sidebar">
        <div className="inner-sidebar">
          <ul className="sidebar-ul">
            <p>Editing 1 photo:</p>
            <li>Title</li>
            <li>Tags</li>
            <li>Albums</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CreateFormSidebar;