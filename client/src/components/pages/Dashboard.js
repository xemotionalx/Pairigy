// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Dashboard({ auth: { user, loading } }) {
  return (
    <div className="section-dashboard">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="heading-size--l text-color-white mt-5 text-shadow">
              Welcome, {user && user.name}
            </h1>
            <h2 className="heading-size--s text-color-white text-shadow">
              Connect. Collaborate. Create.
            </h2>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <div className="card__dashboard mb-3">
              <h3 className="heading-size--s mb-4">Profile</h3>
              <i className="fas fa-user card--icon mb-1"></i>
              <hr className="mb-5" />
              <Link to="/editprofile" className="btn button button--main mb-3">
                Edit Profile
              </Link>
              <br />
              <Link
                to={`/profile/${user && user._id}`}
                className="btn button button--main"
              >
                View Your Profile
              </Link>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="card__dashboard mb-3">
              <h3 className="heading-size--s mb-4">Mail</h3>
              <i className="fas fa-mail-bulk card--icon mb-1"></i>
              <hr className="mb-5" />
              <Link to="/inbox" className="btn button button--main mb-3">
                View Inbox
              </Link>
              <br />
              <Link to="/favorites" className="btn button button--main">
                View Favorites
              </Link>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="card__dashboard mb-5">
              <h3 className="heading-size--s mb-4">Projects</h3>
              <i className="fas fa-users card--icon mb-1"></i>
              <hr className="mb-5" />
              <Link
                to={`/myprojects/`}
                className="btn button button--main mb-3"
              >
                Manage Projects
              </Link>
              <br />
              <Link to="/createproject" className="btn button button--main">
                Create New Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//brings in the state/actions and defined what type they are
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

//connects state to be passed through as props
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
