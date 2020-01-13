// eslint-disable-next-line
import React, { useState } from 'react';


const EditProfile = () => {
    return ( 
        <div className="container mt-5 mb-5">
             <section className="section-editprofile form-editprofile text-center">
               <h1 className="heading-profile--main mb-5">Edit Your Profile</h1>
                <hr />
                <form className="form-group">
                  <div className="row">
                    <label for='name' className="form-editprofile--label">Name:</label>
                    <input type="text" name='name' className="form-control mb-4"></input>

                    <label for='title' className="form-editprofile--label">Title:</label>
                    <input type="text" name='title' className="form-control mb-4"></input>

                    <label for='location' className="form-editprofile--label">Location:</label>
                    <input type="text" name='location' className="form-control mb-4"></input> 

                    <label for='website' className="form-editprofile--label">Website:</label>
                    <input type="text" name='website' className="form-control mb-4"></input>

                    <label for='skills' className="form-editprofile--label">Skills (please seperate with commas):</label>
                    <input type="text" name='skills' className="form-control mb-4"></input> 

                    <label for='bio' className="form-editprofile--label">Bio:</label>
                    <textarea type="text" name='bio' className="form-control mb-4" rows="5"></textarea> 
                  </div>
                  
                  <hr />

                  <div className="row">
                    <h2 className="mb-4">Social Media</h2>
                  </div>
                   
                  <div className="row">
                    <div className="col-sm-2">
                      <label for='twitter' className="form-editprofile--label mr-2">Twitter:</label>
                    </div>
                    <div className="col-sm-10">
                      <input type="text" name='twitter' className="form-control mb-4 w-50"></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label for='instagram' className="form-editprofile--label mr-2">Instagram:</label>
                    </div>
                    <div className="col-sm-10">
                      <input type="text" name='instagram' className="form-control mb-4 w-50"></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label for='facebook' className="form-editprofile--label mr-2">Facebook:</label>
                    </div>
                    <div className="col-sm-10">
                      <input type="text" name='facebook' className="form-control mb-4 w-50"></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label for='linkedin' className="form-editprofile--label mr-2">LinkedIn:</label>
                    </div>
                    <div className="col-sm-10">
                      <input type="text" name='linkedin' className="form-control mb-4 w-50"></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label for='github' className="form-editprofile--label mr-2">Github:</label>
                    </div>
                    <div className="col-sm-10">
                      <input type="text" name='github' className="form-control mb-4 w-50"></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label for='dribbble' className="form-editprofile--label mr-2">Dribbble:</label>
                    </div>
                    <div className="col-sm-10">
                      <input type="text" name='dribbble' className="form-control mb-4 w-50"></input>
                    </div>
                  </div>

                </form>

                <input type='submit' className="btn btn-dark btn-lg" />

             </section>

        </div>
    )
};

export default EditProfile;



//useState holds the information passed through from the form submit
    // const [formData, updateFormData] = useState({
    //     name: "",
    //     title: "",
    //     location: "",
    //     website: "",
    //     skills: "",
    //     bio: "",
    //     twitter: "",
    //     instagram: "",
    //     facebook: "",
    //     linkedin: "",
    //     github: "",
    //     dribbble: "",
    // });

    // const {
    //     name,
    //     title,
    //     location,
    //     website,
    //     skills,
    //     bio,
    //     twitter,
    //     instagram,
    //     facebook,
    //     linkedin,
    //     github,
    //     dribbble,
    // } = formData;