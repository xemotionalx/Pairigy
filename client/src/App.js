import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import components
import Navbar from './components/layout/Navbar';
// Import pages
import Index from './components/pages/Index';
//profile
import EditProfile from './components/pages/profile-forms/EditProfile';
import CreateProfile from './components/pages/profile-forms/CreateProfile';
import Profile from './components/pages/Profile';
import MyProfile from './components/pages/profile/MyProfile';
import MySkills from './components/pages/profile/MySkills';
// messages
import CreateMessage from './components/pages/messages/CreateMsg';
import Inbox from './components/pages/messages/Inbox';
//auth
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { loadUser } from './actions/auth';
import setAuthToken from './components/utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
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
        
        <PrivateRoute path='/myprofile/' exact component={MyProfile} />
        <PrivateRoute path='/myskills/' exact component={MySkills} />

        <Route path='/editprofile/' exact component={EditProfile} />
        <Route path='/createprofile/' exact component={CreateProfile} />

        <Route path='/profile/' exact component={Profile} />

        <Route path='/createmessage/' exact component={CreateMessage} />
        <Route path='/inbox/' exact component={Inbox} />

        <Route path='/login/' exact component={Login} />
        <Route path='/register/' exact component={Register} />
      </Switch>
    </Fragment>
  </Router>
  </Provider>
)
};

export default App;