import { useState } from 'react'

import './App.css'
import Userdetails from './components/Userdetails'
import Showuserdetail from './components/showuserdetail'

function App() {

  return (
    <>
     <div className='container col-4' >
      <h1> FrontEnd </h1>
      <Userdetails/>
      <Showuserdetail/>
      </div>
    </>
  )
}

export default App
