import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import './Post.css';

class Post extends Component {
  render() {
    return (
      <div className="col-lg-8">
        <h1 className="mt-4">{this.props.title}</h1>
        <p className="lead">by <i>{this.props.author}</i></p>
        <p>Posted on {this.props.date}</p>
        <NavLink to={`/posts/${this.props.id}`} className="nav-link">
          <button type="submit" className="btn btn-primary">Show Full Post</button>
        </NavLink>
        <hr />
      </div>
    );
  }
}

export default Post;