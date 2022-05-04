import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Students from './components/Students';
import Contact from './components/Contact';
import StudentsInfo from './components/StudentsInfo';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/students' element={<Students />}/>
        <Route path='contact-us' element={<Contact />}/>
        <Route path='/students-desc' element={<StudentsInfo />}/>
        <Route path='/students-desc/:id' element={<StudentsInfo />}/>
      </Routes>
    </Router>
  );
}

export default App;
