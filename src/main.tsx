import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Router from './Router/LearnRouter.tsx'

createRoot(document.getElementById('root')!).render(
 
    <Router />
  
)
