import React, {Component} from 'react';
import axios from "../../axios-blog";

import './Contacts.css';

class Contacts extends Component {
  state = {
    content: '',
    loading: false
  };
  componentDidMount() {
    this.setState({loading: true});
    axios.get('/pages/-LXdpnhLPKfEZ0CpM59t.json').then((response) => {
      this.setState({content: response.data.content, loading: false})
    })
  }
  render() {
    return (
      <div className='mt-100`'>
        <h1>Contacts</h1>
        <div>{this.state.content}</div>
      </div>
    );
  }
}

export default Contacts;