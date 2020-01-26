import React, {useEffect} from "react";
import  { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CreateMessage from "./CreateMsg";
// eslint-disable-next-line
import ViewMessage from "./ViewMessage";
import { getReceived } from "../../../actions/messages";


function Inbox({ getReceived, messages:{received, messageSelected}, match }) {

  useEffect(() => {
    getReceived()
  }, [getReceived]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="mail__sidebar mt-5 mb-5">
            <h1 className="heading-size--s mb-4">Inbox</h1>          
            <ul class="list-group list-group-flush">
              {received ? received.map(message => (
                <li class="list-group-item">
                  <Link to={`mail/${message._id}`}>
                  <b>{message.subject}</b>
                  </Link>
                <br />
                From: {message.sender.name}
                </li>
              )) : (<li class="list-group-item"> You have no messages </li>) }
            </ul>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="mail__main mt-5 mb-5">
            <CreateMessage />
          </div>
        </div>
      </div>
    </div>
  );
}

Inbox.propTypes = {
  messages: PropTypes.object.isRequired,
  getReceived: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  messages: state.messages
})

export default connect(mapStateToProps, {getReceived})(Inbox);
