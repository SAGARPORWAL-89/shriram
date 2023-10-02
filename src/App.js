import logo from './logo.svg';
import './App.css';
import 'animate.css';
import './assets/css/style.css';

import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Portfolio from './pages/Portfolio';
import Ourproduct from './pages/Ourproduct';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import React from './pages/React';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/aboutus' element={< Aboutus />}></Route>
        <Route exact path='/portfolio' element={< Portfolio />}></Route>
        <Route exact path='/our' element={< Ourproduct/>}></Route>
        <Route exact path='/blogs' element={< Blogs/>}></Route>
        <Route exact path='/contact' element={< Contact/>}></Route>
        <Route exact path='/react' element={< React/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
