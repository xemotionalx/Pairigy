import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../../actions/profile';

const EditProfile = ({ 
  profile: { profile, loading }, 
  createProfile, 
  getCurrentProfile, 
  history
 }) => {
    const [formData, setFormData] = useState({
        status: '',
        website: '',
        location: '',
        skills: '',
        bio: '',
        youtube: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        instagram: '',
        github: '',
        dribbble: ''
    });

    //these functions will be called once the DOM is rendered
    useEffect(() => {
      //once getting the profile, if each item is loading or doesn't exist, leave the field blank
      //otherwise, will set the existing data into the form
      setFormData({
        status: loading || !profile.status ? '' : profile.status,
        website: loading || !profile.website ? '' : profile.website,
        location: loading || !profile.location ? '' : profile.location,
        skills: loading || !profile.skills ? '' : profile.skills.join(','),
        bio: loading || !profile.bio ? '' : profile.bio,
        //for socials, just need to check if 'social' object exists
        twitter: loading || !profile.social ? '' : profile.social.twitter,
        facebook: loading || !profile.social ? '' : profile.social.facebook,
        linkedin: loading || !profile.social ? '' : profile.social.linkedin,
        instagram: loading || !profile.social ? '' : profile.social.instagram,
        github: loading || !profile.social ? '' : profile.social.github,
        dribbble: loading || !profile.social ? '' : profile.social.dribbble,
      });
    }, [loading, profile])
    //once loading is done (profile.loading = false), that is when useEffect runs

    useEffect(() => {
      //get the existing profile
      getCurrentProfile();
    }, [getCurrentProfile]);

    const {
      status,
      website,
      location,
      skills,
      bio,
      twitter,
      facebook,
      linkedin,
      instagram,
      github,
      dribbble
  } = formData

    //the value of that text field will be put in that part of the state of the formData
    // ...formData create a copy of formdata, set a key:value pair with the name & value of each input field
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();
        //this will submit all the fields in the formData state
        createProfile(formData, history, true);
    };

    return (
        <div className="container mt-5 mb-5">

             <section className="section-editprofile form-editprofile text-center">
               <h1 className="heading-profile--main mb-5">Edit Your Profile</h1>
                <hr />
                <form className="form-group" onSubmit={e => onSubmit(e)}>
                  <div className="row">
                  <label htmlFor='location' className="form-editprofile--label">Title*:</label>
                    <input type="text" name='status' value={status} onChange={e => onChange(e)} className="form-control mb-4" required></input>

                    <label htmlFor='location' className="form-editprofile--label">Location:</label>
                    <input type="text" name='location' value={location} onChange={e => onChange(e)} className="form-control mb-4"></input> 

                    <label htmlFor='website' className="form-editprofile--label">Website:</label>
                    <input type="text" name='website' value={website} onChange={e => onChange(e)} className="form-control mb-4"></input>

                    <label htmlFor='skills' className="form-editprofile--label">Skills (please seperate with commas)*:</label>
                    <input type="text" name='skills' value={skills} onChange={e => onChange(e)} className="form-control mb-4" required></input> 

                    <label htmlFor='bio' className="form-editprofile--label">Bio:</label>
                    <textarea type="text" name='bio' value={bio} onChange={e => onChange(e)} className="form-control mb-4" rows="5"></textarea> 
                  </div>
                  
                  <hr />

                  <div className="row">
                    <h2 className="mb-4">Social Media</h2>
                  </div>
                   
                  <div className="row">
                    <div className="col-sm-2">
                      <label htmlFor='twitter' className="form-editprofile--label mr-2">Twitter:</label>
                    </div>
                    <div className="col-sm-10">
                      <input type="text" name='twitter' value={twitter} onChange={e => onChange(e)} className="form-control mb-4 w-50"></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label htmlFor='instagram' className="form-editprofile--label mr-2">Instagram:</label>
                    </div>
                    <div className="col-sm-10">
                      <input type="text" name='instagram' value={instagram} onChange={e => onChange(e)} className="form-control mb-4 w-50"></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label htmlFor='facebook' value={facebook} onChange={e => onChange(e)} className="form-editprofile--label mr-2">Facebook:</label>
                    </div>
                    <div className="col-sm-10">
                      <input type="text" name='facebook' value={facebook} onChange={e => onChange(e)} className="form-control mb-4 w-50"></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label htmlFor='linkedin' className="form-editprofile--label mr-2">LinkedIn:</label>
                    </div>
                    <div className="col-sm-10">
                      <input type="text" name='linkedin' value={linkedin} onChange={e => onChange(e)} className="form-control mb-4 w-50"></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label htmlFor='github' className="form-editprofile--label mr-2">Github:</label>
                    </div>
                    <div className="col-sm-10">
                      <input type="text" name='github' value={github} onChange={e => onChange(e)}  className="form-control mb-4 w-50"></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label htmlFor='dribbble' className="form-editprofile--label mr-2">Dribbble:</label>
                    </div>
                    <div className="col-sm-10">
                      <input type="text" name='dribbble' value={dribbble} onChange={e => onChange(e)}  className="form-control mb-4 w-50"></input>
                    </div>
                  </div>

                  <input type='submit' className="btn btn-dark btn-lg" />

                </form>

             </section>

        </div>
    )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
})

//with router allows for the redirect through the action
export default connect(mapStateToProps, 
  {createProfile, getCurrentProfile })(withRouter(EditProfile));

