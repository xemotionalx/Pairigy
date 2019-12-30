import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logobox">
                <i className="fas fa-globe-europe"></i> &nbsp;
                    Pairigy
            </div>

            <div className="navbar__searchbox">
                <form className="form-inline">
                    <i className="fas fa-search fa-2x" aria-hidden="true"></i>
                    <input className="form-control form-control-lg ml-3 w-50" type="text" placeholder="Search"
                        aria-label="Search" id="user-query" />
                </form>
            </div>

            <div className="navbar__link">
                <Link to="/favorites">Favorites <i class="fas fa-star"></i></Link>
                <Link to="/mail">Mail <i class="fas fa-envelope"></i></Link>
                <Link to="/profile">Profile <i className="fas fa-user"></i></Link>
                <Link to="logout">Logout</Link>
            </div>
        </nav>
    )
}


export default Navbar;
