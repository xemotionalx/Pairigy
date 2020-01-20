import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../search/SearchState';


function Navbar({
    auth: { user, loading }
}) {
    return user ? (
        <nav className="navbar">
            <div className="navbar__logobox">
                <i className="fas fa-globe-europe"></i> &nbsp;
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

            <div className="navbar__link">
                <Link to="/favorites">Favorites <i className="fas fa-star"></i></Link>
                <Link to="/mail">Mail <i className="fas fa-envelope"></i></Link>
                <Link to="/dashboard">Dashboard <i className="fas fa-user"></i></Link>
                <Link to="logout">Logout</Link>
            </div>
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

export default connect( mapStateToProps)(Navbar);
