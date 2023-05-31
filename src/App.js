import React from "react";

function NamedFunction(props) {
  return <p {...props}>Named function</p>;
}

const ArrowFunction = (props) => {
  return <p {...props}>Arrow function</p>;
};

const ArrowFunctionWithImplicitReturn = (props) => (
  <p {...props}>Arrow function with implicit return</p>
);

class ClassComponent extends React.Component {
  render() {
    return <p {...this.props}>Class Component</p>;
  }
}

export default function App() {
  return (
    <React.Fragment>
      <NamedFunction />
      <ArrowFunction />
      <ArrowFunctionWithImplicitReturn />
      <ClassComponent />
    </React.Fragment>
  );
}