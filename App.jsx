import { useEffect, useState } from 'react'
import Routers from './Routing/Routers'
import './App.css'
import {useNavigate} from "react-router-dom"

function App() {

  const navigate = useNavigate()

  useEffect(()=>{
    // navigate("/yourwork")
  },[navigate])


  return (
    <>
            <Routers/>
    </>
  )
}

export default App
