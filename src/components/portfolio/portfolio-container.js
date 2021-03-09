import React, { Component } from 'react';
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome To my Portfolio",
            isLoading: false,
            data: [
                {title: "event1", category: "eCommerce", slug: "quip"},
                {title: "eventb", category: "schedualing", slug: "eventbrite"},
                {title: "eventc", category: "eCommerce", slug: "ministry-safe"},
                {title: "eventD", category: "Enterprise", slug: "swingaway"}
            ]
        };

        this.getPortfolioItems = this.getPortfolioItems.bind(this);

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={'somting.com'} slug={item.slug} />
        });
    }

    getPortfolioItems() {
        // Make a request for a user with a given ID
      axios.get('https://kageluger.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        // handle success
        console.log("responce Data", response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      }) 
      .then = () => {
        // always executed
        };
    }

    render() {
        if(this.state.isLoading) {
            return<div>Loading...</div>;
        }

        this.getPortfolioItems();
        
        return (
            // JSX
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('schedualing')}>
                    schedualing
                </button>
                <button onClick={() => this.handleFilter("Enterprise")}>
                  Enterprise
                </button>


                {this.portfolioItems()}
            </div>
        );
    }
}