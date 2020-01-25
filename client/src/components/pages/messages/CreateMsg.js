import React, {useState} from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createMessage } from "../../../actions/email";


const CreateMessage = ({ createMessage, history }) => {
const [msgData, setMsgData ] = useState({
  subject: "",
  message: ""
})

const {
  subject,
  message
} = msgData;

const onChange = e =>
setMsgData({ ...msgData, [e.target.name]: e.target.value });

const onSubmit = e => {
  e.preventDefault();
  createMessage(msgData, history);
};

    return (
        <div>
            <form className="form form-default form--mail mt-3" onSubmit={e => onSubmit(e)}>
              <div className="row form-group">
                <label htmlFor="subject" className="form-editprofile--label">
                  Subject:
                </label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
              onChange={e => onChange(e)}
                  className="form-control mb-4"
                  required
                ></input>

                <label htmlFor="message" className="form-editprofile--label">
                  Message:
                </label>
                <textarea
                  type="text"
                  name="message"
                  value={message}
              onChange={e => onChange(e)}
                  className="form-control mb-4"
                  rows="10"
                ></textarea>
              </div>
              <div className="row form-groupt">
                <div className="col-sm-6">
                  <select class="custom-select mr-sm-2">
                    <option selected>Choose A Recipient</option>
                    <option value="1">Person 1</option>
                    <option value="2">Person 2</option>
                    <option value="3">Person 3</option>
                  </select>
                </div>
                <div className="col-sm-6 text-center">
                  <input type="submit" className="btn button button--main" />
                </div>
              </div>
            </form>
        </div>
    )
    }

    CreateMessage.propTypes = {
      createMessage: PropTypes.func.isRequired
    };

export default connect(null, { createMessage })(withRouter(CreateMessage));
