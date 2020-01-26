import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { connect } from "react-redux" ;
import { getMessageById } from "../../../actions/messages";


const ViewMessage = ({
    messages: {message, loading}, getMessageById, match
}) => {

    useEffect(() => {
        getMessageById(match.params.message_id);
      }, [getMessageById]);

    return message && !loading ? (
        <div className="container">
            <h1 className="heading-size--s m-4">{message.subject}</h1>
            <h2 className="heading-size--xs m-4">From: {message.sender.name}</h2>
            <div className="mail--text-box mt-3">
                <p>
                {message.body}
                </p>
            </div>
            <Link to="/mail" className="btn button button--main float-right mr-5 mt-3">
            <i class="fas fa-reply"></i> Reply
            </Link>
        </div>
    ) : ""
    }
    
     
    ViewMessage.propTypes = {
        messages: PropTypes.object.isRequired,
        getMessageById: PropTypes.func.isRequired,
    };

    const mapStateToProps = state => ({
       messages: state.messages
    });
    

export default connect(mapStateToProps, {getMessageById})(ViewMessage);
