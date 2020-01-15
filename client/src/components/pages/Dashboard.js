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
            
            <div class="row mt-5">
                <div class="col-md-4 col-sm-12">
                    <div class="card__dashboard">
                        <h3 className="heading-card--main mb-2">
                            Profile
                        </h3>
                        <i class="fas fa-user card--icon mb-1"></i>
                        <hr className="mb-5" />
                        <Link to="/editprofile" className="button button--dashboard mr-3">
                            Edit Profile
                        </Link>
                        <Link to={`/profile/${user && user._id}`} className="button button--dashboard">
                            View Your Profile
                        </Link>
                    </div>
                </div>

                <div class="col-md-4 col-sm-12">
                    <div class="card__dashboard">
                        <h3 className="heading-card--main mb-2">
                            Mail
                        </h3>
                        <i class="fas fa-mail-bulk card--icon mb-1"></i>
                        <hr className="mb-5" />
                        <Link to="/inbox" className="button button--dashboard">
                            View Inbox
                        </Link>
                    </div>
                </div>

                <div class="col-md-4 col-sm-12">
                    <div class="card__dashboard">
                        <h3 className="heading-card--main mb-2">
                            Teams
                        </h3>
                        <i class="fas fa-users card--icon mb-1"></i>
                        <hr className="mb-5" />
                        <Link to="/teams" className="button button--dashboard">
                            Manage Your Teams
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

export default connect( mapStateToProps)(Dashboard);
