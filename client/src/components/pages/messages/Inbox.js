import React from "react";
import { Link } from "react-router-dom";

function Inbox() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="mail__sidebar mt-5 mb-5">
            <h1 className="heading-size--s">Inbox</h1>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="mail__main mt-5 mb-5">Create Message</div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
