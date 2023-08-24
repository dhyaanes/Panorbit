import React from 'react'
import './global.css'
import Profile from './Components/Profile'
import Main from './Components/Main'
import User from './Components/User'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/profile/:id' element={<Profile/>} />
            <Route path='/user' element={<User/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App