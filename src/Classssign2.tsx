import React, { Component } from "react";
import axios from "axios";

interface Product {
  category: string;
  price: number;
  productName: string;
  status: boolean;
}

interface State {
  data: Product[];
}

class Assignment1 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("./todo.json").then((response) => {
      console.log(response.data);

      const newData: Product[] = response.data.map((ele: Product) => {
        return { ...ele, status: true };
      });
      this.setState({ data: newData });
    });
  }

  filter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filteredData = this.state.data.map((ele) => {
      if (ele?.category.toLowerCase().includes(e.target.value.toLowerCase())) {
        ele.status = true;
      } else {
        ele.status = false;
      }
      return ele;
    });
    this.setState({ data: filteredData });
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <select name="option" id="1" onChange={this.filter}>
         <option value="">All</option>
          <option value="Grocery">Grocery</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
        </select>
        <table border={1}>
          {data
            .filter((ele) => ele.status)
            .map((e, index) => {
              return (
                <tr key={index}>
                  <td>{e?.category}</td>
                  <td>{e?.price}</td>
                  <td>{e.productName}</td>
                </tr>
              );
            })}
        </table>
      </div>
    );
  }
}

export default Assignment1;