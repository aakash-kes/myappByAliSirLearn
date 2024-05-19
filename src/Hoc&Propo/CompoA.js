import React, { Component } from "react";
import A from "./CompoAB_HOC";


export class CompoA extends Component {
 
  render() {
    return (
      <>
        <h1>here is increnment button{this.props.count}</h1>

        <button onClick={this.props.increment}>Click</button>
      </>
    );
  }
}

export default A(CompoA);
