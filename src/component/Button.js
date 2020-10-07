import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={() => this.props.clickHandler(this.props.name)}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default Button;
