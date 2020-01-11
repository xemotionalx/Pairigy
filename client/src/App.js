import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import components
import Navbar from './components/layout/Navbar';
// Import pages
import Index from './components/pages/Index';
import EditProfile from './components/pages/EditProfile';
import Profile from './components/pages/Profile';
import MyProfile from './components/pages/profile/MyProfile';
//auth
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { loadUser } from './actions/auth';
import setAuthToken from './components/utils/setAuthToken';
//Redux
import { Provider } from 'react-redux';
import store from './store';


//import CSS
import './App.css';

if (localStorage.token) { 
  setAuthToken(localStorage.token);
};

const App = () => {
  
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

return (
  <Provider store={store}>
  <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Index} />
        
        <Route path='/myprofile/' exact component={MyProfile} />
        <Route path='/editprofile/' exact component={EditProfile} />
        <Route path='/profile/' exact component={Profile} />

        <Route path='/login/' exact component={Login} />
        <Route path='/register/' exact component={Register} />
      </Switch>
    </Fragment>
  </Router>
  </Provider>
)
};

export default App;