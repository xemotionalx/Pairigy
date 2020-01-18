import React, { Component } from 'react';
import SearchQuery from '../utils/APISearch'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {

            // searchField: '',
            profile: [],
            error: "",
            message: ""
        };
    }
    componentWillMount() {
        // Test
        console.log(123);
        this.setState({ q: "", data: [] });
    }

    handleSearch = e => {
        this.setState({ q: e.target.value, data: this.state.data });
        // Test
        console.log(e.target.value);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const profile = SearchQuery;

        SearchQuery.getSearchProfile(this.state.q)
            .then(res => {
                if (profile === "error") {
                    throw new Error(profile);
                }
                else {
                    let results = profile

                    //map through the array 
                    results = results.map(result => {
                        //stores book info in new object 
                        result = {
                            user: profile

                        }
                        return result;
                    })
                    // this.setState({q:this.state.q, data})

                    this.setState({ profile: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err }));
        //  Test
        // console.log(handleFormSubmit);
    }





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

export default Search;
