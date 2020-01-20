import React, { Component } from 'react';


const MemoryCard = props => (
    <div
        className='allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3'
        key={props.id}
        onClick={() => props.handleClick(props.id, props.clicked)}
    >
        <img id={props.name} src={props.avatar} alt={props.name} />
        <h1 id={props.location} alt={props.location} />
        <h2 id={props.bio} alt={props.bio} />

    </div>
);

export default MemoryCard;