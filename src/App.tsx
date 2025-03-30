import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Passing from './Passing.tsx'
import Wrapper from './Wrapper.tsx'
import UserDashboard from './UserDashboard.tsx'
import Example from './Assignment.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Example></Example>
    </>
  )
}

export default App
