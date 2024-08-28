import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import { SciNavbar } from './components/SciNavbar'
import SciFooter from './components/SciFooter'
import About from './pages/About'
import Ranking from './pages/Ranking'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <Router>
        <div className='sticky top-0 z-50'><SciNavbar /></div>
        <div className='min-h-screen flex flex-col justify-between'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/ranking' element={<Ranking />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
        <SciFooter />
      </Router>
    </div>
  )
}

export default App