import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class NavigationComponent extends Component {
  constructor() {
      super();
  }
    render() {
    return (
      <div>
        
        <NavLink exact to="/" activeClassName="active-nav-class">Home</NavLink>
        <NavLink to="/about-me" activeClassName="active-nav-class">About</NavLink>
        <NavLink to="/contact-me" activeClassName="active-nav-class">Contact Me</NavLink>
        <NavLink to="/blog" activeClassName="active-nav-class">Blog</NavLink>

      
        {true ? <button>Add Blog</button> : null }
      </div>
    );
  }
}