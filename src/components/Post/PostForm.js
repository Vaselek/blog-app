import React, {Component} from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    if (props.post) {
      this.state = {...props.post};
    } else {
      this.state = {
        title: '',
        description: '',
        author: '',
        date: ''
      };
    }
  }

  valueChanged = event  => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  submitHandler = event => {
    event.preventDefault();
    let post = {...this.state, date: new Date().toDateString()}
    this.props.onSubmit(post);
  }

  render() {
    return (
      <div className="card my-4">
        <div className="card-body">
          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <label htmlFor="title">Enter post title:</label>
              <input className="form-control" type="text" id='title' value={this.state.title} name='title' onChange={this.valueChanged}/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Enter post description:</label>
              <textarea className="form-control" value={this.state.description} name='description' id='description' onChange={this.valueChanged} rows="3"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="author">Enter post author:</label>
              <input className="form-control" type="text" value={this.state.author} onChange={this.valueChanged} id='author' name='author'/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PostForm;