import React, { useEffect, useState } from "react";
import axios from "axios";
const Assignment1 = () => {
	useEffect(() => {
		axios.get("./todo.json").then((response) => {
			console.log(response.data);
			//originalData(response.data);
                   let newdata = response.data.map((ele)=>{
                        ele.status=true;
                        return ele;
                   })
			setData(newdata);
		});
	}, []);
	const [data, setData] = useState([]);
	//const [original, originalData] = useState([]);
	function Filter(e) {
		let dat1 = data.map((ele) => {
			if (ele?.category.toLowerCase().includes(e.target.value.toLowerCase())) {
                       ele.status=true;
                  }else{
                        ele.status=false;
                  }
                  return ele;
		});
            
           // console.log(data,dat1);
		setData(dat1)
	}
	return (
		<div>
			<input type="text" onChange={Filter} />
			<table border={1}>
				{data.filter((ele)=>{ 
                              if(ele.status){
                              return true;
                        }}).map((e) => {
					return (
						<>
							<tr>
								<td>{e?.category}</td>
								<td>{e?.price}</td>
								<td>{e.productName}</td>
							</tr>
						</>
					);
				})}
			</table>
		</div>
	);
};

export default Assignment1;
