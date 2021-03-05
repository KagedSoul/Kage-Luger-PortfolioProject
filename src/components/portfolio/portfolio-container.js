import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';
export default class PortfolioContainer extends Component {
    // State
    // Lifecycle hooks
    // Dynamic Data and react to changes = Class base = little more complex

    constructor() {
        super()
        console.log("portfolio Container Renderd")
    }

    PortfolioItems() {
        const data = ["event1", "eventb", "eventc"];
        return data.map(item => {
            return <PortfolioItem title={item} url={"google.com"}/>;
        })
    }

    // PortfolioItems2() {
    //     const data = ["event1", "eventb", "eventc"];
    //     return data.map(item => {
    //         return <h2>{item}</h2>;
    //     })
    // }

    render() {
        return (
            // JSX
            // text difference checker
            <div>
                <h2>Portfolio Component Items</h2>

                {this.PortfolioItems()}
                {/* {this.PortfolioItems2()} */}
            </div>
        );
    }
}