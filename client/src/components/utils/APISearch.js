// import axios from "axios"


// export default {
//     // this gets the book from the google search 
//     getSearchProfile: function (query) {
//         return axios.get("http://localhost:5000/api/search?q=" + query)
//     },
//     getSearch: function (id) {
//         return axios.get("/api/search/" + id);
//     },


// }


const search = q => {
    const res = fetch(`http://localhost:5000/api/search?q=${q}`);
    const json = res.json();
    return json;



};


export default search;