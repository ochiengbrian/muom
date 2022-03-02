import React from 'react'
import './App.css';
import Header from './Header';
import Landing from './Landing';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Errorpage from './Errorpage';
import Footer from './Footer';

function App() {
  return (
    <Router>
    <div className="App"> 
    <Header/> 
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={[<Navbar/>, <Home/>]}/>
      <Route path='*' element={<Errorpage/>}/>
    </Routes>
    <Footer/> 
    </div>
    </Router>
  );
}

export default App;
