import React, {Component} from 'react';
import axios from '../axios-blog';
import PostForm from "../components/Post/PostForm";

import './AddPost.css';


class AddPost extends Component {

  addPost = (post) => {
    post.date = new Date().toDateString();
    axios.post('/posts.json', post).then(() => {
      this.props.history.replace('/');
    });
  };

  render() {
    return (
      <div>
        <h3 className='mt-100'>Add New Post</h3>
        <PostForm onSubmit={this.addPost}/>
      </div>
    );
  }
}

export default AddPost;