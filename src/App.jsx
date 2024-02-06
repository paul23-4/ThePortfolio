import React from 'react'
import './App.css'
import Home from './component/Home.jsx'
import Contact from './component/Contact.jsx'
import About from './component/About.jsx'
import {Routes, Route} from 'react-router-dom'
import NavBar from './component/NavBar.jsx'

function App() {
 

  return (
    <div>
      <NavBar/>
 <Routes>

<Route path ='/' element={<Home/>}/>
<Route path ='/About' element={<About/>}/>
<Route path ='/Contact' element={<Contact/>}/>




</Routes>
    </div>

      
  )
}

export default App
