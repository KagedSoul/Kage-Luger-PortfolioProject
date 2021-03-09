import React, { Component } from 'react';
import moment from "moment";
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

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
          <h1>Kage Luger Portfolio</h1>
          <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
            <NavigationContainer />

            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/about-me' component={About}></Route>
              <Route path='/contact-me' component={Contact}></Route>
              <Route path='/blog' component={Blog}></Route>
            </Switch>
          
            
          </div>
        </Router>
      </div>
    );
  }
}
