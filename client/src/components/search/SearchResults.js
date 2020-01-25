import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const SearchResults = ({search: {results}}) => {
  return (
    <div className="container mt-5">
      <h1 className="heading-size--l heading--secondary-gradient text-center mb-5">
        Search Results
      </h1>

      <div className="w-75">

      {results ? 

        results.map(profile => 
          <div className="card w-80 p-2 mb-3">
              <div className="row">
                <div className="col-md-4 text-center">
                  <img src={profile.user.avatar} className="w-100 avatar" />
                </div>
                <div className="col-md-8 px-3">
                  <div className="card-block px-3">
                    <Link to={`profile/{profile.user._id}`}>
                    <h4 className="heading-size--s card-title">{profile.user.name}</h4>
                    </Link>
                    <p className="card-text">{profile.location} | {profile.status}</p>
                  </div>
                </div>
            </div>    
          </div>  
          )
        : ""
        }
      </div>
    </div>
  );
};

SearchResults.propTypes = {
    search: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    search: state.search
})


export default connect(mapStateToProps)(SearchResults);
