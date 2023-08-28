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
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
      console.log(this.state.data);
    } else {
      this.getPortfolioItems(filter);
    }
  }

  portfolioItems() {
    return this.state.data.map((item) => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  getPortfolioItems(filter = null) {
    // Make a request for a user with a given ID
    axios
      .get("https://kageluger.devcamp.space/portfolio/portfolio_items")
      .then((response) => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter((item) => {
              return item.category === filter;
            }),
          });
        } else {
          this.setState({
            data: response.data.portfolio_items,
          });
        }
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
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button
            className="btn"
            onClick={() => this.handleFilter("eCommerce")}
          >
            eCommerce
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Scheduling ")}
          >
            Scheduling
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Social Media")}
          >
            Social Media
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Technology")}
          >
            Technology
          </button>
          <button className="btn" onClick={() => this.handleFilter("Exercise")}>
            Exercise
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Education")}
          >
            Education
          </button>
          <button className="btn" onClick={() => this.handleFilter("DataBase")}>
            DataBase
          </button>
          <button className="btn" onClick={() => this.handleFilter("security")}>
            Security
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("software development")}
          >
            Software Development
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
          >
            Clear
          </button>
        </div>
        <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
      </div>
    );
  }
}
