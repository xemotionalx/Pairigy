import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SearchResults = ({search: {results}}) => {
  return (
    <div className="container mt-5">
      <h1 className="heading-size--l heading--secondary-gradient text-center mb-5">
        Search Results
      </h1>

      {results ? 

        results.map(profile => <p>{profile.user.name}</p>)
        : ""
        }

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
