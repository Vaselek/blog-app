import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link">Home<span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item active">
                <NavLink to="/about" className="nav-link">About<span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item active">
                <NavLink to="/posts/add" className="nav-link">Add Post<span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item active">
                <NavLink to="/contacts" className="nav-link">Contacts<span className="sr-only">(current)</span></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;