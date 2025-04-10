import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import New from './Router/New'
import Login from './router/Login'
import About from './router/About'
interface data {
      arr: number[]
message:string
}
const functioncomponent : React.FC<data> = ({message,arr}) => {
  return (
    <div>
      <h1>{message}</h1>
      <ul>
            {
                  arr.map((e)=>{
                       return <li>{e}</li>
                  })
            }
      </ul>
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<New/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/About' element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default functioncomponent
