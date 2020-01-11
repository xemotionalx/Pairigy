import React from 'react';
import { Link } from 'react-router-dom';

function Inbox() {
    return (
        <div className="container mb-5 mt-5">
            <div className="row">
                <div className="col-sm-6 bg-col-light">
                    <h2 className="heading-messages--main text-center">Inbox</h2>
                </div>
                <div className="col-sm-6 bg-col-light">
                    <Link to="/createmessage" className="button button--user-action mr-3">
                        <i className="far fa-envelope"></i> Message
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Inbox;
