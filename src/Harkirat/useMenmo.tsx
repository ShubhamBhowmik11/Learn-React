import { useState,useMemo } from "react";

const useMemo1 = () =>{
      const [value,SetValue] = useState(0);
      const [count,SetCount] = useState(0);
      // One Way to Do This
      // let sum = 0;
      // for(let i=0;i<=value;i++) sum += i;
      //Another Way through useEffect
      //Another Way  through useMemo
     let sum =  useMemo(()=>{
      let final = 0;
      for(let i=0;i<=value;i++) final += i;
      return final;
     },[value])
            return (
       <>
  <input type="text" onChange={function(e){
  SetValue(parseInt(e.target.value));
  
  }}/>
  <h1>sum of first {value} is {sum}</h1>
  <button onClick={function(){
      SetCount(count+1);
  }}>{count}</button>
       </>
       
      );
}
export default useMemo1;