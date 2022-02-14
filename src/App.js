import React from 'react'
import './App.css';
import Header from './Header';
import Landing from './Landing';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path='/'>
            <Header />
          </Route>
        </Routes> 
    </div>
    </Router>
  );
}

export default App;
