
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  

  return (
    <>
    <Router>
      <div className="d-flex flex-column min-vh-75">
        <Navbar/>
        <main className="container my-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>

    </>
  )
}

export default App
