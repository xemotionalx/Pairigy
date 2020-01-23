import React from "react";
import CreateMessage from "./CreateMsg";
import ViewMessage from "./ViewMessage";

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
            <CreateMessage />
            {/* <ViewMessage /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
