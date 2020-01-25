import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { connect } from "react-redux" ;


const ViewMessage = ({
    match,
    message: { message, loading }
}) => {

    return loading && message === null ? (
        <div> loading </div>
        ) : (
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
            )}
            
        </div>

    
        )}
    ViewMessage.propTypes = {
        message: PropTypes.object.isRequired,
        
    };

    const mapStatToProps = state => ({
        message: state.message,
        messages: state.messages
        
    });
    

export default ViewMessage;


