import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome To my Portfolio",
      isLoading: false,
      data: [],
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter((item) => {
        return item.category === filter;
      }),
    });
  }

  portfolioItems() {
    return this.state.data.map((item) => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  getPortfolioItems() {
    // Make a request for a user with a given ID
    axios
      .get("https://kageluger.devcamp.space/portfolio/portfolio_items")
      .then((response) => {
        // handle success
        console.log("responce Data", response);
        this.setState({
          data: response.data.portfolio_items,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      }).then = () => {
      // always executed
    };
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      // JSX

      <div className="portfolio-items-wrapper">
        <button className="btn" onClick={() => this.handleFilter("eCommerce")}>
          eCommerce
        </button>
        <button className="btn" onClick={() => this.handleFilter("scheduling")}>
          Scheduling
        </button>
        <button className="btn" onClick={() => this.handleFilter("Enterprise")}>
          Enterprise
        </button>

        {this.portfolioItems()}
      </div>
    );
  }
}
