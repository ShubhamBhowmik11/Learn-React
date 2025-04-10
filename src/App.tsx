import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  Passing from './Passing.tsx'
import Wrapper from './Wrapper.tsx'
import UserDashboard from './UserDashboard.tsx'
import Filter from './Router/DynamicRouting.tsx'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);
  function Change(e){
    setCount(e.target.value);
  }

  return (
    <>
    <BrowserRouter>
    <input type="text" onChange={Change}/>
    <Routes>
      <Route path="details/:id" element={<Filter/>}>shubham</Route>
    </Routes>
    </BrowserRouter>
    <Filter num={count}></Filter>

    </>
  )
}

export default App
