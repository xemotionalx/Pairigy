import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Search from "../search/SearchState";
import { logout } from "../../actions/auth";
import LogoSm from "../../images/logo-sm.gif";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = ({ auth: { isAuthenticated, user, loading }, logout }) => {
  const authLinks = (
    <div className="navbar__link">
      <Link to="/search/advanced">
        Search <i className="fas fa-search"></i>
      </Link>
      <Link to="/mail">
        Mail <i className="fas fa-envelope"></i>
      </Link>
      <Link to="/myprojects">
        Projects <i className="fas fa-project-diagram"></i>
      </Link>
      <Dropdown>
        <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
          Dashboard <i className="fas fa-tachometer-alt"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/dashboard" className="text-center">
            <i className="fas fa-tachometer-alt"></i> Dashboard{" "}
          </Dropdown.Item>
          <Dropdown.Item href="/favorites" className="text-center">
            <i className="fas fa-star"></i> Favorites{" "}
          </Dropdown.Item>
          <Dropdown.Item href="/profile" className="text-center">
            <i className="fas fa-user"></i> Profile{" "}
          </Dropdown.Item>
          <Dropdown.Item>
            <a onClick={logout} href="/">
              <i className="fas fa-sign-out-alt" />{" "}
              <span className="hide-sm">Logout</span>
            </a>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
  const guestLinks = (
    <div className="navbar__link">
      <Link to="/login">
        Login <i className="fas fa-star"></i>
      </Link>
      <Link to="/register">
        Sign Up <i className="fas fa-envelope"></i>
      </Link>
    </div>
  );
  return user ? (
    <nav className="navbar">
      <div className="navbar__logobox">
        <Link to="/">
          <img src={LogoSm} alt="logo" className="logo--xs mr-1" />
          Pairigy
        </Link>
      </div>

      <Search />

      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  ) : (
    ""
  );
};

//brings in the state/actions and defined what type they are
Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};

//connects state to be passed through as props
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
