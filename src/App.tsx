import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  Passing from './Passing.tsx'
import Wrapper from './Wrapper.tsx'
import UserDashboard from './UserDashboard.tsx'
import Filter from './Router/LearnRouter.tsx'
import Classcom from './Classcomponent.tsx'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);
  function Change(e){
    setCount(e.target.value);
  }
  const arr = [1,2,3];
  return (
    <>
    <h1 className='        bg-amber-200'>Shubham</h1>
    <h1>bhowmik</h1>
    <Classcom message="shubham" arr={arr}/>
    </>
  )
}

export default App
