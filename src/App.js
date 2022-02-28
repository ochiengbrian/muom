
import './App.css';
import Header from './Header';
import Landing from './Landing';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import Home from './Home';
import { Component } from 'react';
import Errorpage from './Errorpage';

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
    </div>
    </Router>
  );
}

export default App;
