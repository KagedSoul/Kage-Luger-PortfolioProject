import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';
export default class PortfolioContainer extends Component {
    // State
    // Lifecycle hooks
    // Dynamic Data and react to changes = Class base = little more complex

    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome To my Portfolio",
            data: [
                {title: "event1"},
                {title: "eventb"},
                {title: "eventc"}
            ]
        };
        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        });
    }

    PortfolioItems() {
        
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} />
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
                <h2>{this.state.pageTitle}</h2>

                {this.PortfolioItems()}
                {/* {this.PortfolioItems2()} */}
                <hr/>
                <button onClick={this.handlePageTitleUpdate}>Change Title</button>
            </div>
        );
    }
}