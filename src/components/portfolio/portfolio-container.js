import React, { Component } from 'react';

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

    render() {
        if(this.state.isLoading) {
            return<div>Loading...</div>;
        }
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