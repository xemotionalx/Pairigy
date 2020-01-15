import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="container mt-5 mb-5">

            <div className="row">
                <div className="col-sm-12">
                    <h1 className="heading-dashboard--main">
                        Welcome, MaiAda Carpano
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
                        <Link to="/createprofile" className="button button--dashboard mr-3">
                            Edit Profile
                        </Link>
                        <Link to="/myprofile" className="button button--dashboard">
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
                        <Link to="/createprofile" className="button button--dashboard">
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
                        <Link to="/createprofile" className="button button--dashboard">
                            Manage Your Teams
                        </Link>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Dashboard
