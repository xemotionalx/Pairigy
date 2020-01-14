import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfileById } from '../../../actions/profile';
import MySkills from './MySkills';
import MySocials from './MySocials';

const CurrentProfile = ({ 
    getProfileById, 
    auth: { user }, 
    profile: { profile, loading},
    match 
}) => {

};

//brings in the state/actions and defined what type they are
CurrentProfile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

//connects state to be passed through as props
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect( mapStateToProps, { getProfileById })(CurrentProfile);