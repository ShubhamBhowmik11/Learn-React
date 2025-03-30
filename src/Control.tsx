import { ChangeEvent } from "react";

 let data = "";
 function ClickHandler(e:ChangeEvent){
         let val = e.target as HTMLInputElement;
         data = val.value;
 }
 function Show(){
      alert(data);
 }
 const Control =()=>{
 return (
<>
<input type="text"  onChange={ClickHandler}/>
<button onClick={Show}>click</button>
</>
 )
  }
  export default Control;