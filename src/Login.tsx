import { useState } from 'react'
const Login =()=>{
      type UserType = {
            name:string,
            role:string
      }
      const [isLogged,setLogin] = useState(false);
      const [data,setData] = useState("hi");
      const  [user,setUser] = useState<UserType>({} as UserType);
      const loginHandler = ()=>{
            setLogin(true);
      setUser({name:"shubham",role:"student"});
      }
return (
      <>
      {data};
      {isLogged?'Logged in' : 'Logged out'};
      <h1 className=''>Example</h1>
      </>
)
}
export default Login;