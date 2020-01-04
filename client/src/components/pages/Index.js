import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <section className="section-splash">
        <div className="section-splash--inner">
        <h1 className="heading-splash heading-splash--main mb-4">Pairigy</h1>
        <h3 className="heading-splash heading-splash--sub mb-5">A meeting point for tech people and projects</h3>
        <div className="buttons">
        <Link to="#" className="button button--main mr-5 d-inline-block">Sign Up</Link>
        <Link to="#" className="button button--main d-inline-block">Log In</Link>
        </div>
    </div>
    </section>
    )
}

export default Index;
