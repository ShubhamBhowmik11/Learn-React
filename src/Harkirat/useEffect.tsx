import { useEffect, useState } from "react";
import Axios from "axios";

const Example = () => {
	const [arr, setdata] = useState([]);
	useEffect(() => {
		Axios.get("/todo.json").then((response) => {
			setdata(response.data);
                  console.log(response.data);
		});
	}, []);
	return (
		<>
			<h1>Work is done</h1>
			{arr.map((Element, index) => {
				return <ToDo key={index} name={Element} />
})}
		</>
	);
};
function ToDo({ name }) {
	return (
		<>
			<h1>{name}</h1>
		</>
	);
}
export default Example;
