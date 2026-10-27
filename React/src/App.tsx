import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<div>Welcome to the App</div>} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
