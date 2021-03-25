import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import axios from 'axios';

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact-me';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import Auth from "./pages/auth";
import NoMatch from './pages/no-match';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus:"NOT_LOGGED_IN"
    }
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);

  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }
  
  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  checkLoginStatus() {
    return axios
    .get("https://api.devcamp.space/logged_in", { withCredentials: true })
    .then(response => {
      const loggedIn = response.data.logged_in;
      const loggedInStatus = this.state.loggedInStatus;
      
      // If loggedIn and status is Logged_IN => return Data
      // If loggedIn status NOT_LOGGED_IN => update state
      // If not loggedIn and Status LOGGED_IN => update tate

      if (loggedIn && loggedInStatus ===("LOGGED_IN")) {
        return loggedIn
      } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        });
      }else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        });
      }
    })
    .catch(error => {
      console.log("error", error)
    })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [
    <Route path='/blog' component={Blog}></Route>
    ];
  };

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer 
            loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogout={this.handleSuccessfulLogout}
            />
            
            
            <h2>{this.state.loggedInStatus}</h2>

            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route
               path='/auth'
               render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                 )
               }
               />
              <Route path='/about-me' component={About}></Route>
              <Route path='/contact-me' component={Contact}></Route>
              
              { this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null};
              
              <Route exact path='/portfolio/:slug' component={PortfolioDetail}></Route>
              {/* A Route Catch all, Goes at the end */}
              <Route component={NoMatch} /> 
            </Switch>
          
            
          </div>
        </Router>

      </div>
    );
  }
}
