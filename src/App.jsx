import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import StartPage from './pages/StartPage'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<StartPage/>}/>
      </Routes>
    </>
  )
}

export default App
