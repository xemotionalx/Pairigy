import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import components
import Navbar from './components/layout/Navbar';
// Import pages
import Index from './components/pages/Index';
import Login from './components/pages/Login';
import EditProfile from './components/pages/EditProfile';
import Profile from './components/pages/Profile';
import Register from './components/pages/Register';

//import CSS
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />

      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/login/' exact component={Login} />
        <Route path='/edit-profile/' exact component={EditProfile} />
        <Route path='/profile/' exact component={Profile} />
        <Route path='/register/' exact component={Register} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
