// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Dashboard({
    auth: { user, loading },
}) {

    return (
        <div className="container mt-5 mb-5">

            <div className="row">
                <div className="col-sm-12">
                    <h1 className="heading-dashboard--main">
                        Welcome, {user && user.name}
                    </h1>
                    <h2 className="heading-dashboard--sub">
                        Connect. Collaborate. Create.
                    </h2>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-4 col-sm-12">
                    <div className="card__dashboard">
                        <h3 className="heading-card--main mb-2">
                            Profile
                        </h3>
                        <i className="fas fa-user card--icon mb-1"></i>
                        <hr className="mb-5" />
                        <Link to="/editprofile" className="button button--dashboard mr-3">
                            Edit Profile
                        </Link>
                        <Link to={`/profile/${user && user._id}`} className="button button--dashboard">
                            View Your Profile
                        </Link>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">
                    <div className="card__dashboard">
                        <h3 className="heading-card--main mb-2">
                            Mail
                        </h3>
                        <i className="fas fa-mail-bulk card--icon mb-1"></i>
                        <hr className="mb-5" />
                        <Link to="/inbox" className="button button--dashboard mr-2">
                            View Inbox
                        </Link>
                        <Link to="/favorites" className="button button--dashboard">
                            View Favorites
                        </Link>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">
                    <div className="card__dashboard">
                        <h3 className="heading-card--main mb-2">
                            Projects
                        </h3>
                        <i className="fas fa-users card--icon mb-1"></i>
                        <hr className="mb-5" />
                        <Link to={`/myprojects/`} className="button button--dashboard mr-2">
                            Manage Projects
                        </Link>
                        <Link to="/createproject" className="button button--dashboard">
                            Create New Project
                        </Link>
                    </div>
                </div>



            </div>

        </div>
    )
}

//brings in the state/actions and defined what type they are
Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
};

//connects state to be passed through as props
const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
