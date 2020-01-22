import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Spinner from '../layout/Spinner';
import { getEmails } from '../../actions/email';

const Emails = ({ getEmail, email: { emails, loading }}) => {
    useEffect(()=> {
        getEmails();
    }, [getEmails]);


    return <div>
            
        </div>
    
}

Emails.propTypes = {
getEmails: PropTypes.func.isRequired,
email: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
    email: state.email
})
export default connect(mapStateToProps,{ getEmails })(Emails);
