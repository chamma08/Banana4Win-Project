import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './Login'
import SignIn from './pages/SignIn'
import LeaderBoard from './pages/LeaderBoard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </BrowserRouter>
  )
}
