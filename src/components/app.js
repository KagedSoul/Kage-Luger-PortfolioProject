import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

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
      loggInStatus:"NOT_LOGGED_IN"
    }
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);

  }

  handleSuccessfulLogin() {
    this.setState({
      loggInStatus: "LOGGED_IN"
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggInStatus: "NOT_LOGGED_IN"
    });
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer />
            <h2>{this.state.loggInStatus}</h2>

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
              
              
              ></Route>



              <Route path='/about-me' component={About}></Route>
              <Route path='/contact-me' component={Contact}></Route>
              <Route path='/blog' component={Blog}></Route>
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
