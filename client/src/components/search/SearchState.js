import React, { Component } from 'react';
import SearchQuery from '../utils/APISearch';
import { connect } from 'react-redux';
import { getSearchProfile } from "../../actions/profile";


class Search extends Component {

    constructor(props) {
        super(props);


        this.state = {

            // searchField: '',
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
        console.log(value);
        this.setState({
            data: value
        });

        // this.setState({ q: e.target.value, data: this.state.data });
        // // Test
        // console.log(e.target.value);
        // this.handleFormSubmit(data);

    };


    handleFormSubmit = event => {
        event.preventDefault();


        this.props.getSearchProfile(this.state.data);

        console.log(this.state.data);
        console.log('ashsksdhsk');


    };

    // this.setState({ profile });







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




            </div>
        );
    }
}



const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    searchResults: state.profile.searchResults,
    loading: state.profile.loading
});

export default connect(
    mapStateToProps,
    { getSearchProfile }

)(Search);