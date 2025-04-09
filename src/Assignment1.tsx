import React, { useEffect, useState } from "react";
import axios from "axios";
interface Product {
  category: string;
  price: number;
  productName: string;
  status: boolean;
}

const Assignment1: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("./todo.json").then((response) => {
      console.log(response.data);

      const newData: Product[] = response.data.map((ele: Product) => {
        return { ...ele, status: true };
      });
      setData(newData);
    });
  }, []);

  function Filter(e: React.ChangeEvent<HTMLSelectElement>) {
    const filteredData = data.map((ele) => {
      if (ele?.category.toLowerCase().includes(e.target.value.toLowerCase())) {
        ele.status = true;
      } else {
        ele.status = false;
      }
      return ele;
    });
    setData(filteredData);
  }

  return (
    <div>
      <select name="option" id="1" onChange={Filter}>
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
};

export default Assignment1;