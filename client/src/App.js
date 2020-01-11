import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import components
import Navbar from './components/layout/Navbar';
// Import pages
import Index from './components/pages/Index';
import EditProfile from './components/pages/EditProfile';
import Profile from './components/pages/Profile';
//auth
import Login from './components/auth/Login';
import Register from './components/auth/Register';
//Redux
import { Provider } from 'react-redux';
import store from './store';

//import CSS
import './App.css';

const App = () => (
  <Provider store={store}>
  <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/editprofile/' exact component={EditProfile} />
        <Route path='/login/' exact component={Login} />
        <Route path='/profile/' exact component={Profile} />
        <Route path='/register/' exact component={Register} />
      </Switch>
    </Fragment>
  </Router>
  </Provider>
);

export default App;
