import React from "react";

type StateProps = {
  name: string;
};

type StType = {
  data: string;
  year: number;
};

class State extends React.Component<StateProps, StType> {
  // Directly initializing state (no constructor needed)
  state: StType = {
    data: "test code",
    year: 2024, // Initial year value
  };

  // Using an arrow function to automatically bind `this`
  ClickFunction = (): void => {
    this.setState({ data: "updated data" });
    this.setState((prevState) => ({ year: prevState.year + 1 }));
  };

  render() {
    return (
      <>
        <h1>{this.state.data}</h1>
        <h2>Year: {this.state.year}</h2>
        <button onClick={this.ClickFunction}>Click Me</button>
      </>
    );
  }
}

export default State;
