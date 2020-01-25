import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchProfile } from "../../actions/profile";

// import profile from '../pages/profile';

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
        this.setState({ data: value });
        // Test

        console.log(this.state.data);


    };


    handleFormSubmit = event => {
        event.preventDefault();

        this.props.getSearchProfile(this.state.data);



        // if (!this.state.data.length) return null;


        // return this.state.data.find((res, index) => (
        //     <div key={index}>
        //         <h3>{res.name}</h3>
        //         <p>{res.body}</p>
        //     </div>


        // ))

        console.log(this.state.data);
        this.setState({ data: this.state.data })

    };



    // displaySearchResults = (data) => {

    //     if (!data.length) return null;


    //     return data.map((datas, index) => (
    //         <div key={index}>
    //             <h3>{datas.name}</h3>
    //             <p>{datas.body}</p>
    //         </div>


    //     ))


    // }



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

                    {/* {this.getProfileById(this.state.data)} */}

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

export default connect(
    mapStateToProps,
    { getSearchProfile }


)(Search);