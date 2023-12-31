import './app.scss';
import {Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import Tournament from './views/Tournament';
import Resources from './views/Resources';
import JobOffers from './views/JobOffers';
import Contact from './views/Contact'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tournament" element={<Tournament />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/job-offers" element={<JobOffers/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App
