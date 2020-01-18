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
import Profile from './components/pages/profile/Profile';

import CreateProject from './components/pages/projects/CreateProject';
import Project from './components/pages/projects/Project';
import ListProjects from './components/pages/projects/ListProjects';
import MyProjects from './components/pages/projects/MyProjects';

import Dashboard from './components/pages/Dashboard';

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
        <Route path='/login/' exact component={Login} />
        <Route path='/register/' exact component={Register} />

        <PrivateRoute path='/dashboard' exact component={Dashboard} />
        
        <Route path='/profile/:userId' exact component={Profile} />
        <PrivateRoute path='/editprofile/' exact component={EditProfile} />
        <PrivateRoute path='/createprofile/' exact component={CreateProfile} />

        <Route path='/project/:projectId' exact component={Project} />
        <Route path='/projects/user/:userId' exact component={ListProjects} />
        <PrivateRoute path='/myprojects' exact component={MyProjects} />
        <PrivateRoute path='/createproject/' exact component={CreateProject} />
    
        <Route path='/createmessage/' exact component={CreateMessage} />
        <Route path='/inbox/' exact component={Inbox} />

      </Switch>
    </Fragment>
  </Router>
  </Provider>
)
};

export default App;