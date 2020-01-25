import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchProfile } from "../../actions/profile";
import { getProfileById } from "../../actions/profile";
import { getProjectsByUserId } from "../../actions/project";
import { withRouter } from "react-router-dom";



class Search extends Component {

    constructor(props) {
        super(props);


        this.state = {


            profile: [],
            error: "",
            message: "",

        };
    }
    componentWillMount() {
        // Test
        console.log(123);
        this.setState({ q: "", data: [] });

    }

    componentDidMount() {

        console.log(this.props.searchResults);
        console.log(this.props.loading);

    }

    handleSearch = e => {
        const { value } = e.target;
        this.setState({ data: value });
        // Test

        console.log(this.state.data);


    };


    handleFormSubmit = event => {
        event.preventDefault();

        return this.props.getSearchProfile(this.state.data, this.props.history)



    };






    // const setProfileState = async e => {
    //     e.preventDefault();
    //     const {
    //         dataset: { projectid }
    //     } = e.target;
    //     await getProfileById(profileid);
    //     window.location.replace(`profile/display/${projectid}`);
    //     return false;
    // };










    render() {

        return (

            <div className="navbar__searchbox">
                <form className="form-inline">
                    <i className="fas fa-search fa-2x" aria-hidden="true"></i>
                    <input className="form-control form-control-lg ml-3 w-50" onChange={this.handleSearch} type="text" placeholder="Search"
                        aria-label="Search" id="user-query" />
                    <button type="submit" className="submitBtn btn btn-primary" onClick={this.handleFormSubmit}>
                        Submit
            </button>

                </form>

                <div className="search-result">



                </div>


            </div>
        );
    }
}



const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    searchResults: state.profile.searchResults,
    loading: state.profile.loading
});

export default withRouter(connect(
    mapStateToProps,
    { getSearchProfile, getProfileById, getProjectsByUserId }



)(Search));