import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list"
import PortfolioSideBarList from '../portfolio/portfolio-sidebar-list';

export default class PortfolioManager extends Component {
    constructor() {
        super();
        
        this.state = {
            portfolioItems: []
        };

    }




    getPortfolioItems() {
        // Make a request for a user with a given ID
      axios.get('https://kageluger.devcamp.space/portfolio/portfolio_items', {withCredentials: true})
      .then(response => {
        // handle success
        this.setState({
            portfolioItems: [...response.data.portfolio_items]
        })
      })
      .catch(error => {
        // handle error
        console.log(error);
      }) 
      .then = () => {
        // always executed
        };
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
    return (
      <div className="portfolio-manager-wrapper">
          <div className="left-column">
              <h1>Form</h1>
          </div>
            <div className="right-column">
                <PortfolioSideBarList data={this.state.portfolioItems}/>
            </div>
      </div>
    );
  }
}