import React from "react";

function NamedFunction(props) {
  return <p {...props}>Named function</p>;
}

const MyComponent = ({ hero }) => {
  const { name, skill, age } = hero;
  return (
    <div>
      <p>{name} is {age} years old.</p>
      <p>His main skill is {skill}.</p>
    </div>
  );
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
    <>
      <NamedFunction />
      <MyComponent hero={{ name: "John", age: 25, skill: "programming" }} />
      <ArrowFunctionWithImplicitReturn />
      <ClassComponent />
    </>
  );
}
