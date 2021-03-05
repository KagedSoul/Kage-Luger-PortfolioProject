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

    render() {
        return (
            // JSX
            // text difference checker
            <div>
                <h2>Portfolio Component Items</h2>

                <PortfolioItem />
                <h2>this is a test Extra</h2>
            </div>
        );
    }
}