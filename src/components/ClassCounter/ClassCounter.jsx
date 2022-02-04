import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  addTwoHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 2 };
    });
  };

  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button onClick={this.addTwoHandler}>click here to add 2</button>
      </div>
    );
  }
}
