import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../search/SearchState';
import { logout } from '../../actions/auth';
import LogoSm from '../../images/logo-sm.gif';

const  Navbar = ({ auth: { isAuthenticated, user, loading }, logout
}) => {
    const authLinks = (
        <div className="navbar__link">
        <Link to="/favorites">Favorites <i className="fas fa-star"></i></Link>
        <Link to="/mail">Mail <i className="fas fa-envelope"></i></Link>
        <Link to="/myprojects">Projects <i className="fas fa-project-diagram"></i></Link>
        <Link to="/dashboard">Dashboard <i className="fas fa-user"></i></Link>
        <a onClick={logout} href='/'>
        <i className='fas fa-sign-out-alt' />{' '}
        <span className='hide-sm'>Logout</span>
      </a>
    </div>
    );
    const guestLinks = (
        <div className="navbar__link">
        <Link to="/login">Login <i className="fas fa-star"></i></Link>
        <Link to="/register">Sign Up <i className="fas fa-envelope"></i></Link>
    </div>
    );
    return user ? (
        <nav className="navbar">
            <div className="navbar__logobox">
                <img src={LogoSm} alt="logo" className="logo--xs mr-1" />
                    Pairigy
            </div>

            {/* <div className="navbar__searchbox">
                <form className="form-inline">
                    <i className="fas fa-search fa-2x" aria-hidden="true"></i>
                    <input className="form-control form-control-lg ml-3 w-50" type="text" placeholder="Search"
                        aria-label="Search" id="user-query" />
                </form>
            </div> */}
            <Search />

            {/* <div className="navbar__link">
        <Link to="/favorites">Favorites <i className="fas fa-star"></i></Link>
        <Link to="/mail">Mail <i className="fas fa-envelope"></i></Link>
        <Link to="/dashboard">Dashboard <i className="fas fa-user"></i></Link>
    </div> */}

            {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}

        </nav>
    ) : ""
}


//brings in the state/actions and defined what type they are
Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
};

//connects state to be passed through as props
const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect( mapStateToProps, { logout })(Navbar);