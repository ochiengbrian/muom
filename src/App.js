
import './App.css';
import Header from './Header';
import Landing from './Landing';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
    <div className="App">  
          <Header />
          <Switch>
          <Route to='/'>
              <Landing />
            </Route>
            <Route to='/Home'>
              <Navbar />
              <Home />
            </Route>   
          </Switch>
    </div>
    </Router>
  );
}

export default App;
