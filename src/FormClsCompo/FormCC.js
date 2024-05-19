import React, { Component } from "react";

export class FormCC extends Component {
  constructor() {
    super();
    this.state = {
      UserName: "",
      Skills: "",
      Comments: "",
    };
  }

  UserNameChange = (event) => {
    this.setState({
      UserName: event.target.value,
      //   Skills: event.target.value,
    });
  };

  SkillsNameChange = (event) => {
    this.setState({
      Skills: event.target.value,
    });
  };

  CommentsNameChange = (event) => {
    this.setState({
      Comments: event.target.value,
    });
  };

  handleSubmit = (event) => {
    if (this.validate()) {
      alert(`${this.state.UserName} `);
    }
    event.preventDefault();
  };

  validate(event) {
    let error = true;
    if (this.state.UserName == "") {
      error = false;
      this.setState({
        usernameError: "UserName is empty",
      });
    } else if (this.state.UserName.length != 10) {
      error = false;
      this.setState({
        usernameError: "UserName is empty",
      });
    } else {
      this.setState({
        usernameError: "",
      });
    }
  }
  render() {
    return (
      <div>
        <form>
          <div>
            <label>User Name :</label>
            <input
              type="text"
              value={this.state.UserName}
              onChange={this.UserNameChange}
            ></input>
          </div>

          <div>
            <select value={this.state.Skills} onChange={this.SkillsNameChange}>
              <optipon value="React">React Js </optipon>
              <option value="java">java</option>
              <option value="node">Node</option>
            </select>
          </div>
          <div>
            <label>CommentsChange : </label>
            <textarea
              value={this.state.Comments}
              onChange={this.CommentsNameChange}
            >
              Text area :
            </textarea>
          </div>
          <button onSubmit="">Click for Submit</button>
        </form>
      </div>
    );
  }
}

export default FormCC;
