import React, { Component } from "react";
import Button from "./Button";

class ButtonPanel extends Component {
  handleClick = (buttonName) => this.props.clickHandler(buttonName);
  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" clickHandler={this.handleClick}></Button>
          <Button name="+/-" clickHandler={this.handleClick}></Button>
          <Button name="%" clickHandler={this.handleClick}></Button>
          <Button name="÷" clickHandler={this.handleClick} orange></Button>
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick}></Button>
          <Button name="8" clickHandler={this.handleClick}></Button>
          <Button name="9" clickHandler={this.handleClick}></Button>
          <Button name="x" clickHandler={this.handleClick} orange></Button>
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick}></Button>
          <Button name="5" clickHandler={this.handleClick}></Button>
          <Button name="6" clickHandler={this.handleClick}></Button>
          <Button name="-" clickHandler={this.handleClick} orange></Button>
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick}></Button>
          <Button name="2" clickHandler={this.handleClick}></Button>
          <Button name="3" clickHandler={this.handleClick}></Button>
          <Button name="+" clickHandler={this.handleClick} orange></Button>
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide></Button>
          <Button name="." clickHandler={this.handleClick}></Button>
          <Button name="=" clickHandler={this.handleClick} orange></Button>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
