import { useEffect, useRef, useState } from "react"
import  axios  from "axios";
interface obj  {
      avatar:string,
      email:string,
      first_name:string,
      last_name:string,
      id:number
}

const DataFetch = ()=>{
      const [todo,setTodo] = useState<obj[]>([]);
      const [parent,setparent] = useState<obj[]>([]);
      const data =useRef<HTMLInputElement>(null);
      useEffect(()=>{
            axios.get("https://reqres.in/api/users?page=2").then((reponse)=>{
                  setTodo(reponse.data.data);
                  setparent(reponse.data.data);
                 
            })
      },[])
      function Filter(){
           if(data.current){
           let filter= parent.filter((e)=>{
            if(data.current){
                  if(e.first_name.includes(data.current.value))
                        return e;
            }
                  
           })
           setTodo(filter);
      }
      else{
      let filter= parent.filter((e)=>{
            return e;
           })
           setTodo(filter);
      }
           
            
      }
      return (
           <>
           <input type="text" onChange={Filter} ref={data} className=" bg-slate-500"/>
           <table border={1}>
           {
            
            todo.map((e)=>{ 
                  return(
                  <tr>
                  <td>{e.avatar}</td>
                  <td>{e.email}</td>
                  <td>{e.first_name}</td>
                  <td>{e.last_name}</td>
                  <td>{e.id}</td>
                  </tr>
            )
            })
      }
      </table>
      <div className=" bg-red-50">shubham</div>
           </>
      )
      
}
export default DataFetch;