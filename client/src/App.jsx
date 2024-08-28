import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import { Profile } from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/about' element={<Profile />}></Route>
        <Route path='/sign-in' element={<Signin />}></Route>
        <Route path='/sign-up' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
