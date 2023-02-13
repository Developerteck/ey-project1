import { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello mubarak ",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      message: "good bye mubarak sir  ",
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick = {this.clickHandler.bind(this)} >Click here to see the  change </button> */}
        <button onClick={this.clickHandler}>
          Click here to see the change{" "}
        </button>
      </div>
    );
  }
}
export default EventBind;
