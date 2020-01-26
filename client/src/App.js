import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Import components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
// Import pages
import Dashboard from './components/pages/Dashboard';
import Index from './components/pages/Index';
//search
import AdvancedSearch from './components/search/AdvancedSearch';
import SearchResults from './components/search/SearchResults';
//favorites
import ListFavorites from "./components/pages/favorites/ListFavorites";
//profile
import EditProfile from './components/pages/profile-forms/EditProfile';
import CreateProfile from './components/pages/profile-forms/CreateProfile';
import Profile from './components/pages/profile/TestProfile';
//projects
import CreateProject from './components/pages/project-forms/CreateProject';
import EditProject from './components/pages/project-forms/EditProject';
import Project from './components/pages/projects/Project';
import ListProjects from './components/pages/projects/ListProjects';
import MyProjects from './components/pages/projects/MyProjects';
// messages
import ViewMessage from "./components/pages/messages/ViewMessage";
import Inbox from "./components/pages/messages/Inbox";
//auth
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { loadUser } from "./actions/auth";
import setAuthToken from "./components/utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
//Redux
import { Provider } from "react-redux";
import store from "./store";

//import CSS
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

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

            <PrivateRoute path='/search/advanced' exact component={AdvancedSearch} />
            <PrivateRoute path='/search/results' exact component={SearchResults} />

            <Route path='/profile/:userId' exact component={Profile} />
            <PrivateRoute path='/editprofile/' exact component={EditProfile} />
            <PrivateRoute
              path='/createprofile/'
              exact
              component={CreateProfile}
            />

            <PrivateRoute path='/favorites/' exact component={ListFavorites} />
            <PrivateRoute path='/createfave/' exact component={ListFavorites} />

            <Route path='/project/:projectId' exact component={Project} />
            <Route
              path='/projects/user/:userId'
              exact
              component={ListProjects}
            />
            <PrivateRoute path='/myprojects' exact component={MyProjects} />
            <PrivateRoute
              path='/createproject/'
              exact
              component={CreateProject}
            />
            <Route
              path='/myprojects/project/edit/:projectId'
              exact
              component={EditProject}
            />

            <Route path='/mail/' exact component={Inbox} />
            <Route path='/mail/:message_id' exact component={ViewMessage} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
