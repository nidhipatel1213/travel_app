import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/travel_app' component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
