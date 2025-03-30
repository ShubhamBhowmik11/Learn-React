import axios from "axios";
import { useEffect, useState } from "react";
interface data {
	value: string;
}
const Experiment = () => {
	const [value, SetValue] = useState(1);
	return (
		<div>
			<button
				onClick={function () {
					SetValue(1);
				}}
			>
				1
			</button>
			<button
				onClick={function () {
					SetValue(2);
				}}
			>
				2
			</button>
			<button
				onClick={function () {
					SetValue(3);
				}}
			>
				3
			</button>
			<button
				onClick={function () {
					SetValue(4);
				}}
			>
				4
			</button>
			<div>{value}</div>
			<Component id={value}></Component>
		</div>
	);
};
const Component = ({ id }) => {

	const [changeid, Setid] = useState(1);
	const [name, SetName] = useState<"">();
	useEffect(() => {
		console.log("working");
		axios.get("/todo.json").then((reponse) => {
			let arr;
			arr = reponse.data;
			SetName(arr[id]);
		});
	}, [id]);
	return (
	<>
	<h1>{name}</h1>
	</>
	);
};
export default Experiment;
