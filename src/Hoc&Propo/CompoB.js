import { Component } from "react";
import A from "./CompoAB_HOC";

export class HocPropDrilling extends Component {
 

  render() {
    return (
      <>
        <h1>Counter {this.props.count} </h1>
        <button onClick={this.props.increment}>Click here</button>
      </>
    );
  }
}
export default A(HocPropDrilling);
