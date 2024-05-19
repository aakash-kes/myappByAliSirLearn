import { Component } from "react";


let A=(M)=>{

class NM extends Component{

  state={
    count:0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };


render(){
  return <M
  count={this.state.count}
  increment={this.increment}
  />
}

}

return NM;

}

export default A;