import React, { Component } from "react";
import "./App.css";
import ButtonPanel from "./component/ButtonPanel";
import Display from "./component/Display";
import calculate from "./logic/calculate";

class App extends Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  };
  render() {
    return (
      <div>
        <Display value={this.state.next || this.state.total || 0} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
