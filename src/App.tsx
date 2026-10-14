
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Menu from './pages/menu'
import Reservation from './pages/reservation'
import Chef from './pages/chef'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
