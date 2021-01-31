import React from "react";

function MyComponent1(props) {
  return (
    <div className="comp1">
      <h1>This is Function Component </h1>
      <h3>created by: <span>{props.name}</span></h3>
    </div>
  );
}
export default MyComponent1;
