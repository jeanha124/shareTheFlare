import React from 'react';
import { Link } from 'react-router-dom';

class CommentListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: ""
    };
  }
  componentDidMount() {
    this.props.fetchComments();
  }
  render(){
    return (
      <div className="curr-comment">
        <p>{this.state.body}</p>
      </div>
    );
  }
}

export default CommentListItem;
        
        