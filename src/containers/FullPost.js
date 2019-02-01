import React, {Component} from 'react';
import axios from '../axios-blog';

import './FullPost.css';
import {NavLink} from "react-router-dom";

class FullPost extends Component {
  state = {
    post: null,
    loading: false
  };
  componentDidMount() {
    this.setState({loading: true});
    axios.get('/posts/' + this.props.match.params.id + '.json').then((response) => {
      this.setState({post: {...response.data, id: this.props.match.params.id}, loading: false})
    })
  }

  deletePost = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    axios.delete('/posts.json', this.state.post).then(() => {
      this.setState({loading: false});
      this.props.history.replace('/');
    })
  };

  render() {
    let post = null;
    if (this.state.post) {
      post = (
        <div className="mt-100 col-lg-8">
          <h1 className="mt-4">{this.state.post.title}</h1>
          <p className="lead">by <i>{this.state.post.author}</i></p>
          <p>Posted on {this.state.post.date}</p>
          <p className="lead">{this.state.post.description}</p>
          <NavLink to={'/posts/' + this.state.post.id + '/edit'}>
            <button type="submit" className="btn btn-primary">Edit Post</button>
          </NavLink>
          <button onClick={(e)=>this.deletePost(e)} type="submit" className="btn btn-danger">Delete Post</button>
          <hr />
        </div>
      )
    }
    return (
      <div>
        {this.state.loading ? <div><span className="sr-only">Loading...</span></div> : post}
      </div>
    );
  }
}

export default FullPost;