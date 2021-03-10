import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class NavigationComponent extends Component {
  constructor() {
      super();
  }
    render() {
    return (
      <div className="nav-wrapper">
        
        <div className="left-side">
          <NavLink exact to="/" activeClassName="active-nav-class">Home</NavLink>
          <NavLink to="/about-me" activeClassName="active-nav-class">About</NavLink>
          <NavLink to="/contact-me" activeClassName="active-nav-class">Contact Me</NavLink>
          <NavLink to="/blog" activeClassName="active-nav-class">Blog</NavLink>
        </div>
        <div className="right-side">Kage Luger</div>
      
        {true ? <button>Add Blog</button> : null }
      </div>
    );
  }
}