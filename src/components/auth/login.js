import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email:"",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        
    }

  render() {
    return (
      <div>
        <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>
        <form onSubmit={this.handleSubmit}>
        {/* as data is being input, a handeler interperates the data */}
            <input 
            type="email"
            name="email"
            placeholder="Your Email"
            value={this.state.email}
            onChange={this.handleChange}
            />

            <input 
                type="password"
                name="password"
                placeholder="Your Password"
                value={this.state.password}
                onChange={this.handleChange}
            />

            <div>
                <button type="submit">Login</button>   
            </div>    
        </form>
      </div>
    );
  }
}