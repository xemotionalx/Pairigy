import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import components
import Navbar from './components/layout/Navbar';
// Import pages
import Index from './components/pages/Index';
import Profile from './components/pages/Profile';
import './App.css';

const App = () => 
<Router>
    <Fragment>
      <Navbar />
      
      <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/profile/" exact component={Profile} />
      </Switch>
      
    </Fragment>
   
</Router>

export default App;
