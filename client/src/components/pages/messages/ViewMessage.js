import React from 'react';
import { Link } from 'react-router-dom';

function ViewMessage() {
    return (
        <div>
            <h1 className="heading-size--s m-4">Subject</h1>
            <h2 className="heading-size--xs m-4">Name of Sender</h2>
            <div className="mail--text-box mt-3">
                <p>
                Contents of message here.
                </p>
            </div>
            <Link to="/mail" className="btn button button--main float-right mr-5 mt-3">
            <i class="fas fa-reply"></i> Reply
            </Link>
        </div>
    )
}

export default ViewMessage
