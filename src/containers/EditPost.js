import React, {Component} from 'react';
import axios from '../axios-blog';
import PostForm from "../components/Post/PostForm"

import './EditPost.css';


class EditPost extends Component {

  state = {
    post: null
  }

  componentDidMount() {
    axios.get('/posts/' + this.props.match.params.id + '.json').then((response) => {
      this.setState({post: response.data})
    })
  }
  editPost = (post) => {
    axios.put('/posts/' + this.props.match.params.id + '.json', post).then(() => {
      this.props.history.replace('/');
    })
  }

  render() {
    let form = <PostForm post={this.state.post} onSubmit={this.editPost}/>
    if (!this.state.post) {
      form = <div><span className="sr-only">Loading...</span></div>
    }
    return (
      <div>
        <h1 className='nav-margin' >Edit post</h1>
        {form}
      </div>
    );
  }
}

export default EditPost;