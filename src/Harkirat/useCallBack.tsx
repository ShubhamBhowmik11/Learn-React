import React, { memo, useCallback, useState } from "react";
const useCallBack = () => {
	const [count, setCount] = useState(0);

	const a = useCallback( ()=> {
			console.log("hi");
	},[]);
	
      
	function increase() {
		setCount((pre) => {
			return pre + 1;
		});
	}
	return (
		<div>
			<button onClick={increase}>{count}</button>
			<Demo a={a} />
		</div>
	);
};
const Demo = memo(function ({a}) {
	return (
		<>
			<h1>Shubham {a}</h1>
			<h1>Bhowmik</h1>
		</>
	);
});
export default useCallBack;
