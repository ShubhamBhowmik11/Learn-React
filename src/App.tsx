import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  Passing from './Passing.tsx'
import Wrapper from './Wrapper.tsx'
import UserDashboard from './UserDashboard.tsx'
import Filter from './Classssign2.tsx'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Filter className="   bg-blue-100"/>
    <h1 className="bg-blue-100">shubham</h1>
    </>
  )
}

export default App
