import React, {Component} from 'react';

import './Home.css';
import PostList from "../../containers/PostList";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="margin-from-nav container">
            <PostList/>
        </div>
      </div>
    );
  }
}

export default Home;