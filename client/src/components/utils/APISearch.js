import axios from "axios"


export default {
    // / this gets the book from the google search 
    getSearchProfile: function (query) {
        return axios.get("/api/search?q=" + query)
            .then(() => {
                console.log('aData has been received');


            })
            .catch(() => {

                alert("Error retrieving data!!!");


            })
    },
    // getSearch: function (id) {
    //     return axios.get("/api/search/" + id);
    // },


}


// const search = async (q) => {
//     const res = await fetch(`/api/search?q=${q}`);
//     const json = await res.json();
//     return json;



// };


// export default search;