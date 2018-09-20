import React from 'react';

class EditPhotoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateTitle(e){
    this.setState({title: e.target.value});
  }
  updateDescription(e){
    this.setState({description: e.target.value});
  }
  handleSubmit(e){
    this.props.updatePhoto({title: this.state.title, description: this.state.description});
    this.props.photo.id;
  }
  render () {
    let titleIn = <input className="title1" type="text" value={this.state.title} onChange={this.updateTitle} />
    let descrip = <textarea className="descrip2" type="text" value={this.state.description} onChange{this.updateDescription} />

    return (
      <form className="edit-form" onSubmit={this.handleSubmit}>
        {titleIn}
        <br />
        {descript}
        <br />
        <button className="update" >Update Photo</button>  
      </form>
    );
  }
}