import { useContext, useRef } from "react"
import { UserType } from "./UserDashboard";
import { LoginContext } from "./logincontext";

const Login = () =>{
      const inputRef=useRef<HTMLInputElement|null>(null);
      const user=useContext<UserType | undefined>(LoginContext)
      function loginHandler(){

      }
      
      return (
            <>
            <input type="text" ref={inputRef}/>
            <button onClick={loginHandler}>Login</button>
            </>
      )
}
export default Login;