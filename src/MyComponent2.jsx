import React from "react";
import "./App.css";

class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="comp2">
        <h1>This is Class Component </h1>
        <h3>
          created By: <span>{this.props.name}</span>
        </h3>
      </div>
    );
  }
}
export default MyComponent2;
