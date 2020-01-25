import React, {useState} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {searchByLocation} from "../../actions/search";

function AdvancedSearch({
    search,
    history,
    searchByLocation
}) {

    const [formData, setFormData] = useState({
        searchTerm: "",
        searchCriteria: "",
    });

    const {searchTerm, searchCriteria} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e=> {
        e.preventDefault();
        searchByLocation(searchTerm, history);
    }

  return (
    <div className="container mt-5">
      <h1 className="heading-size--l heading--secondary-gradient text-center mb-5">
        Advanced Search
      </h1>
      <form className="form form-default form-group w-75" onSubmit={e => onSubmit(e)}>
        <div className="row">
          <label htmlFor="searchTerm" className="form-editprofile--label">
            <i className="fas fa-search"></i> Search Term
          </label>
          <input type="text" className="form-control" 
                name="searchTerm"
              value={searchTerm}
              onChange={e => onChange(e)} />
        </div>
        <div className="row form-check mt-5">
        <h4 className="heading-size--xs mb-4">Choose Search Criteria...</h4>
            <div className="form-check" name="searchCriteria"
              value={searchCriteria}
              onChange={e => onChange(e)}>
                <input className="form-check-input" type="radio" />
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
        <div className="row d-flex justify-content-center">
            <input type="submit" className="btn button button--main mt-5" />
        </div>
      </form>
    </div>
  );
}

AdvancedSearch.propTypes = {
    search: PropTypes.object.isRequired,
    searchByLocation: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    search: state.search
})

export default connect(mapStateToProps, {
    searchByLocation
  })(AdvancedSearch);
