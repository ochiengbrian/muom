import React from 'react'
import './App.css';
import Header from './Header';
import Landing from './Landing';
import Navbar from './Navbar';
<<<<<<< HEAD
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import Home from './Home';
import { Component } from 'react';
import Errorpage from './Errorpage';
=======
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
>>>>>>> b53d6c10af6ea2dd223674119d2b940e81eaafff

function App() {
  return (
    <Router>
<<<<<<< HEAD
    <div className="App"> 
    <Header/> 
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={[<Navbar/>, <Home/>]}/>
      <Route path='*' element={<Errorpage/>}/>
    </Routes>
=======
    <div className="App">
    <Header /> 
      <Switch>
          <Route path='/navbar'>
            <Navbar />
            <Home />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
>>>>>>> b53d6c10af6ea2dd223674119d2b940e81eaafff
    </div>
    </Router>
  );
}

export default App;
