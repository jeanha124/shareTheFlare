import React from 'react';
import { Link } from 'react-router-dom';

class DuringUpload extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      ownerId: this.props.currentUser.id,
      photoUrl: null,
      photoFile: null,
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
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
      return this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  componentDidMount(){
    return <input type="file" onChange={this.handleFile} className="form-file" />;
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
    this.props.action(formData).then(() => this.props.history.push(`/photos/${this.props.currentUser.display_name}`));
  }
  render(){
    let prev, submit, inputTitle, inputDescription, fileF;
    prev = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    submit = this.handleSubmit;
    inputTitle = <input type="text" className="photo-title" value={this.state.title} onChange={this.handleTitle} placeholder="Add title"/>;
    inputDescription = <input type="text" className="photo-description" value={this.state.description} onChange={this.handleDescription} placeholder="Add a description"/>;
    fileF = <input type="file" onChange={this.handleFile} className="form-file"/>;
   
      return (
        <React.Fragment>
          <div className="content-new">
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
            <nav className="change-nav">
              <button id="add-add" className="btn">
                <Link to='/photos/upload/new'><i className="fas fa-folder-plus plus-fol"></i>Add</Link>
              </button>
              <button id="delete"><i className="fas fa-times-circle ex-but"></i>Delete</button>
              <button id="upload1">Upload 1 Photo</button>
            </nav>
            <form className="new-photo" onSubmit={submit}>
              <ul>
                {fileF}
                <li>{prev}</li>
                <li className="photo-title">{inputTitle}</li>
                <li className="photo-description">{inputDescription}</li>
              </ul>
              <button className="sub">Submit</button>
            </form>
          </div>
        </React.Fragment>
      ); 
  }
}

export default DuringUpload;