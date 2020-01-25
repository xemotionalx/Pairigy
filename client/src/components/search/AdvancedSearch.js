import React from "react";
import PropTypes from "prop-types";

function AdvancedSearch(props) {
  return (
    <div className="container mt-5">
      <h1 className="heading-size--l heading--secondary-gradient text-center mb-5">
        Advanced Search
      </h1>
      <form className="form form-default form-group w-75">
        <div className="row">
          <label htmlFor="name" className="form-editprofile--label">
            <i className="fas fa-search"></i> Search Term
          </label>
          <input type="text" className="form-control" id="Search" />
        </div>
        <div className="row form-check mt-5">
        <h4 className="heading-size--xs mb-4">Choose Search Criteria...</h4>
            <div className="form-check">
                <input className="form-check-input" type="radio" checked />
                    <label className="form-check-label ml-2" htmlFor="name">
                        Name
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" />
                    <label className="form-check-label ml-2" htmlFor="email">
                        E-Mail
                    </label>
                </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" />
                    <label className="form-check-label ml-2" htmlFor="skill">
                        Skill
                    </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" />
                    <label className="form-check-label ml-2" htmlFor="location">
                        Location
                    </label>
                </div>
        </div>
      </form>
    </div>
  );
}

AdvancedSearch.propTypes = {};

export default AdvancedSearch;
