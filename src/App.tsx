
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Screen from './pages/screen'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Screen />} />
          
        </Routes>
      </Router>

    </div>
  )
}

export default App
