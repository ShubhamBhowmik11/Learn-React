import React, { Component, createRef } from "react";
import axios from "axios";

interface Obj {
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
  id: number;
}

interface State {
  todo: Obj[];
  parent: Obj[];
}

class DataFetch extends Component<{}, State> {
  dataRef = createRef<HTMLInputElement>();

  constructor(props: {}) {
    super(props);
    this.state = {
      todo: [],
      parent: [],
    };
  }

  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=2").then((response) => {
      this.setState({
        todo: response.data.data,
        parent: response.data.data,
      });
    });
  }

  filter = () => {
    const { parent } = this.state;
    const inputValue = this.dataRef.current?.value || "";

    const filtered = parent.filter((e) =>
      e.first_name.includes(inputValue)
    );

    this.setState({ todo: filtered });
  };

  render() {
    const { todo } = this.state;

    return (
      <>
        <input
          type="text"
          onChange={this.filter}
          ref={this.dataRef}
          className="bg-slate-500"
        />
        <table border={1}>
          {todo.map((e) => (
            <tr key={e.id}>
              <td>{e.avatar}</td>
              <td>{e.email}</td>
              <td>{e.first_name}</td>
              <td>{e.last_name}</td>
              <td>{e.id}</td>
            </tr>
          ))}
        </table>
        <div className="bg-red-50">shubham</div>
      </>
    );
  }
}

export default DataFetch;