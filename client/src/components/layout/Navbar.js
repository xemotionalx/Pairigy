import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        
    <ul>
        <div className="navbar__link">
        <Link to="/favorites">Favorites <i className="fas fa-star"></i></Link>
        <Link to="/mail">Mail <i className="fas fa-envelope"></i></Link>
        <Link to="/profile">Profile <i className="fas fa-user"></i></Link>
    </div>
        
        
        <a onClick={logout} href='#!'>
            <i className='fas fa-sign-out-alt'></i>{' '}
            <span className='hide-sm'>Logout</span>
            </a>
    
    </ul>


    );

    const guestLinks = (

        <div className="navbar__link">
        <Link to="/favorites">Favorites <i className="fas fa-star"></i></Link>
        <Link to="/mail">Mail <i className="fas fa-envelope"></i></Link>
        <Link to="/profile">Profile <i className="fas fa-user"></i></Link>
    </div>
                    
                    
    );
    return (
        <nav className="navbar">
            <div className="navbar__logobox">
                <i className="fas fa-globe-europe"></i> &nbsp;
                    Pairigy
            </div>

            { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
            <div className="navbar__searchbox">
                <form className="form-inline">
                    <i className="fas fa-search fa-2x" aria-hidden="true"></i>
                    <input className="form-control form-control-lg ml-3 w-50" type="text" placeholder="Search"
                        aria-label="Search" id="user-query" />
                </form>
            </div>

            
        </nav>
    )
}
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);

