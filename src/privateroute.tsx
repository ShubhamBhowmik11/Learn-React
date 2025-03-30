import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react"
import { UserType } from "./logincontext"
import LoginScreen from './LoginScreen'

function PrivateRoute(){
      const [ name,setName]=useState<UserType|undefined>(undefined);
      return (
            <>
            <ul>
                  <li><NavLink to='/'></NavLink></li>
                  <li><NavLink to='/LoginScreen'>Login</NavLink></li>
            </ul>
            <Router>
                  <Route path='/home' element={LoginScreen}/>
            </Router>
            </>
            
            
      )
}