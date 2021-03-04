import React, { Component } from 'react';
import portfolioItem from './portfolio-item';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    // State
    // Lifecycle hooks
    // Dynamic Data and react to changes = Class base = little more complex
    render() {
        return (
            // JSX
            <div>
                <h2>Portfolio Component Items</h2>

                <portfolioItem />
            </div>
        )
    }
}