import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


//...rest operator takes anything else that's passed in along with component
//auth state is passed through using Proptypes
const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading}, ...rest }) => (
//if auth is not authenticated and is not loading, redirect to login
//else proceeed to the requested component
    <Route {...rest} render={props => !isAuthenticated && !loading ? 
        (<Redirect to='/login' />) 
        : (<Component {...props} /> )} />
);

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
