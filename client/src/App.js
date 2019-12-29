import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import './App.css';

const App = () => 
<Router>
    <Fragment>
      <Navbar />
      <h1>Testing</h1>
    </Fragment>
</Router>

export default App;
