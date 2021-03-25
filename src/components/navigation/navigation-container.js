import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router";
//HOC are lowercaseToCapital
import { NavLink } from 'react-router-dom';



const NavigationComponent = (props) => {

  const dynamicLink = ( route, linkText) => {
    return(
  <div className="nav-link-wrapper">  
  <NavLink to="/blog" activeClassName="active-nav-link">Blog</NavLink>
  </div>
    );
  };

  const handleSignOut = () => {
    axios.delete("https://api.devcamp.space/logout", {withCredentials: true}).then(response => {
      if(response.status === 200 ) {
        props.history.push("/");
        props.handleSuccessfulLogout();
      }
      return response.data;
    }).catch(error => {
      console.log("error Siging out", error)
    });
  };
  

    return (
      <div className="nav-wrapper">
        
        <div className="left-side">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="active-nav-link">Home</NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/about-me" activeClassName="active-nav-link">About</NavLink>
          </div>  

          <div className="nav-link-wrapper">
            <NavLink to="/contact-me" activeClassName="active-nav-link">Contact Me</NavLink>
          </div>
        
         { props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/blog", "Blog") : null}
        </div>
        
        <div className="right-side">
          Kage Luger
          {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut}>Sign Out</a> : null}
        </div>
      
        {/* {true ? <button>Add Blog</button> : null } */}
      </div>
    );
  }

export default withRouter(NavigationComponent);