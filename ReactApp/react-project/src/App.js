
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 
'react-router-dom';
import Home from './components/pages/Home.js';
import Products from './components/pages/Products.js';
import Services from './components/pages/Services.js';
import SignUp from './components/pages/SignUp.js'; 

function App() {
  return (
    <>
      <Router>
         <Navbar/>
         <Switch>
           <Route path='/' exact component={Home} />
           <Route path='/services' component={Services} />
           <Route path='/products' exact component={Products} />
           <Route path='/signup' exact component={SignUp} />
         </Switch>
      </Router> 
    </>
  );
}

export default App;
