import React from 'react';

class PhotoUploadForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      ownerId: this.props.currentUserId,
      photoUrl: null,
      photoFile: null,
    };
  }
  handleTitle(e) {
    this.setState({title: e.currentTarget.value})
  }
  handleDescription(e) {
    this.setState({description: e.currentTarget.value})
  }
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[owner_id]', this.state.ownerId);
    if (this.state.photoFile) {
      formData.append('photo[picture]', this.state.photoFile);
    }
    $.ajax ({
      url: '/api/photos',
      method: 'POST',
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response.message),
      (response) => {
        console.log(response.responseJSON)
      }
    );
  }
  render(){
    let prev, submit, inputTitle, inputDescription, fileF;
    prev = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    submit = this.handleSubmit.bind(this);
    inputTitle = <input type="text" id="photo-title" value={this.state.title} onChange={this.handleTitle.bind(this)} />;
    inputDescription = <input type="text" id="photo-description" value={this.state.description} onChange={this.handleDescription.bind(this)} />;
    fileF = <input type="file" onChange={this.handleFile.bind(this)} />;
    return (
      <form onSubmit={submit}>
        <label htmlFor="photo-title">Title</label>
        {inputTitle}
        <br />
        <label htmlFor="photo-description">Description</label>
        {inputDescription}
        <br />
        {fileF}
        <h3>Image Preview</h3>
        {prev}
        <button>Upload a new Photo!</button>
      </form>
    );
  }
};

export default PhotoUploadForm;