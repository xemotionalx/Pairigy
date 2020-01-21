import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';

const Index = ({
    auth: {user, loading}
}) => {
    return user ? (<Dashboard />) : (
        <section className="section-splash">
        <div className="section-splash--inner">
        <h1 className="heading-splash heading-size--xxl mb-4">Pairigy</h1>
        <h3 className="heading-splash heading-size--xs mb-5">A meeting point for tech people and projects</h3>
        <div className="buttons">
        <Link to="/register/" className="button button--splash mr-5 d-inline-block">Sign Up</Link>
        <Link to="/login/" className="button button--splash d-inline-block">Log In</Link>
        </div>
    </div>
    </section>
    )
}

//brings in the state/actions and defined what type they are
Index.propTypes = {
    auth: PropTypes.object.isRequired,
};

//connects state to be passed through as props
const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect( mapStateToProps)(Index);
