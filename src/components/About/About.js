import React, {Component} from 'react';
import axios from "../../axios-blog";

import './About.css';

class About extends Component {

  state = {
    content: '',
    loading: false
  };
  componentDidMount() {
    this.setState({loading: true});
    axios.get('/pages/-LXdpRvvjMNr3Yf2XAY7.json').then((response) => {
      this.setState({content: response.data.content, loading: false})
    })
  }

  render() {
    return (
      <div className='mt-100'>
        <h1>About</h1>
        <div>{this.state.content}</div>
      </div>
    );
  }
}

export default About;