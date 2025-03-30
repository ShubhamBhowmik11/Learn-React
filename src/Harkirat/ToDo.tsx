import { useEffect, useState } from "react";
import React from "react";

// interface Data {
// 	name: string;
// }
// function ToDo() {
// 	const [arr, setArr] = useState<Data[]>([{ name: "shubham" }]);
// 	const
// 	function AddObject() {
// 		console.log("ji");
// 		setArr((pre) => [...pre, { name: "shubham" }]);
// 	}
// 	return (
// 		<>
// 			<button onClick={AddObject}>Click</button>
// 			{arr.map((e) => {
// 				return <h1>{e.name}</h1>;
// 			})}
// 		</>
// 	);
// }

// const Memo = React.memo(function Memo(prop: Data): JSX.Element {
// 	const [val, setVal] = useState<string>("");
// 	function ChangingValue() {
// 		console.log("code is working");
// 	}
// 	return (
// 		<>
// 			<button onClick={ChangingValue}>Change</button>
// 			<h1>{val}</h1>
// 		</>
// 	);
// });
// interface data {
// 	name: string;
// 	id: number;
// }
// function ToDoFunction() {
// 	const [todo, settodo] = useState<data[]>([
// 		{ name: "shubham", id: Math.random() },
// 		{ name: "shubham", id: Math.random() },
// 		{ name: "shubham", id: Math.random() },
// 	]);
// 	function update() {
// 		settodo([...todo, { name: "shubham", id: Math.random() }]);
// 	}
// 	return (
// 		<>
// 			<button onClick={update}>AddElement</button>
// 			{todo.map((e) => {
// 				//<Domo key={e.id} name={e.name} />
//         return <Domo key={e.id} name={e.name}></Domo>
// 			})}
// 		</>
// 	);
// }
// function Domo({ name }: { name: string }) {
// 	return <h1>{name}</h1>;
// }

// import { useState } from "react";

// interface Data {
//   name: string;
//   id: number;
// }

// function ToDoFunction() {
//   const [todo, setTodo] = useState<Data[]>([
//     { name: "shubham", id: Math.random() },
//     { name: "shubham", id: Math.random() },
//     { name: "shubham", id: Math.random() },
//   ]);

//   function update() {
//     setTodo([...todo, { name: "shubham", id: Math.random() }]);
//   }

//   return (
//     <>
//       <button onClick={update}>Add ToDo</button>
//       {todo.map((e) => (
//         <Domo key={e.id} name={e.name} />
//       ))}
//     </>
//   );
// }

// function Domo({ name }: { name: string }) {
//   return <h1>{name}</h1>;
// }

// export default ToDoFunction;





interface todo {
	name:String,
	class:String,
}
function FetchData() : JSX.Element{
	useEffect(()=>{
		const GetData = async () : Promise<void> =>{
		const  response : Response = await fetch('/todo.json');
            const data : todo[] = await response.json();
		console.log(data);
		}
		GetData();
	},[])
	
	return <>
      <h1>shubham</h1>
	</>
}
export default FetchData;
