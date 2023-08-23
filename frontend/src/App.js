import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Signing from './Components/Signin/Signing'
import UserProfile from './Components/userProfile/UserProfile'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Signing/>}/>
      <Route path='/profile' element={<UserProfile/>}/>
    </Routes>
  )
}

export default App