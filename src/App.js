import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from "./components/Home/Home";
import AddPost from "./containers/AddPost";
import FullPost from "./containers/FullPost";
import EditPost from "./containers/EditPost";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/posts" exact component={Home}/>
              <Route path="/posts/add" exact component={AddPost}/>
              <Route path="/posts/:id" exact component={FullPost}/>
              <Route path='/posts/:id/edit' component={EditPost}></Route>
              <Route path="/about" exact component={About}/>
              <Route path="/contacts" exact component={Contacts}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
