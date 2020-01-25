import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { connect } from "react-redux" ;
import { getMessageById } from "../../../actions/email";


const ViewMessage = ({
    match,
    getMessageById,
    message: { message, loading }
}) => {
    useEffect(() => {
        getMessageById(match.params.userId);
      }, [match, getMessageById]);

      const [messageData, setMessageData] = useState({
        userId: "",
        subject: "",
        message: ""

      });

useEffect(() => {
    
    setMessageData({
        userId: loading ? "" : messages.user._id,
        subject: loading ? "" : messages.user.subject,
        message: loading  ? "" : messages.user.message
    });
}, [loading, message]);
const {
    userId,
    subject,
    messages
} = messageData;


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

    
        )
        }
    ViewMessage.propTypes = {
        getMessageById: PropTypes.func.isRequired,
        message: PropTypes.object.isRequired,
        
    };

    const mapStatToProps = state => ({
        message: state.message,
        messages: state.messages
        
    });
    

export default connect(mapStatToProps, {
    getMessageById
})(ViewMessage);


