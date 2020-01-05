// eslint-disable-next-line
import React, { useState, useEffect } from 'react';

const EditProfile = () => {
    
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

    return ( 
        <div className="container mt-5 mb-5">
             <section className="section-profile">
                <form>
                    {/* name */}
                    <input type="text" value="name"></input>
                </form>
                <input type='submit' className='btn btn-primary my-1' />
             </section>

        </div>
    )
}

export default EditProfile;
