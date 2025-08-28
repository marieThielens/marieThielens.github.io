
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './components/NavBar'
import Home from './pages/Home';
import Projects from './pages/Projects'
import About from './pages/About'
import NotFound from './pages/NotFound'
import ProjectDescriptionPage from './pages/ProjectDescription';
import './App.css'

function App() {
  
// const basename = process.env.NODE_ENV === "production" ? "/" : "";
  return (
    <>
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-75">
        <Navbar/>
        <main className="container my-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<About />} />
            <Route path="/projectDescription/:id" element={<ProjectDescriptionPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>

    </>
  )
}

export default App
