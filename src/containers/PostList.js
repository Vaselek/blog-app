import React, {Component} from 'react';
import Post from "../components/Post/Post";
import axios from "../axios-blog";

class PostList extends Component {
  state = {
    posts: [
      { id: 0,
        title: 'First Post',
        author: 'First Post Author',
        date: 'January 1, 2018 at 12:00 PM',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporiseligendi eos magni recusandae laborum minus inventore?'
      }
    ]
  }
  componentDidMount() {
    let url = 'posts.json';
    axios.get(url).then(response => {
      let posts = null;
      if (response.data) {
        posts = Object.keys(response.data).map(id => {
          return {...response.data[id], id};
        })
      }
      this.setState({posts});
    })
  }

  render() {
    let posts = <div>No messages</div>;
    if (this.state.posts) {
      posts = this.state.posts.map(post => (
        <Post id={post.id} key={post.id} author={post.author} title={post.title} date={post.date}
              description={post.description}/>
      ));
    };

    return (
      <div>
        {posts}
      </div>
    );
  }
}

export default PostList;