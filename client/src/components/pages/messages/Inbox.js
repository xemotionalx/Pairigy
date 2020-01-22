import React from "react";
import { Link } from "react-router-dom";

function Inbox() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="mail__sidebar mt-5 mb-5">
            <h1 className="heading-size--s mb-4">Inbox</h1>
            
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <b>Subject</b>
                <br />
                Name of Sender
              </li>
              <li class="list-group-item">
                <b>Subject</b>
                <br />
                Name of Sender
              </li>
              <li class="list-group-item">
                <b>Subject</b>
                <br />
                Name of Sender
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="mail__main mt-5 mb-5">
            <form className="form form-default form--mail mt-3">
              <div className="row form-group">
                <label htmlFor="subject" className="form-editprofile--label">
                  Subject:
                </label>
                <input
                  type="text"
                  name="subject"
                  value="Subject"
                  className="form-control mb-4"
                  required
                ></input>

                <label htmlFor="message" className="form-editprofile--label">
                  Message:
                </label>
                <textarea
                  type="text"
                  name="message"
                  value="Write Message Here..."
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
        </div>
      </div>
    </div>
  );
}

export default Inbox;
