import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
    //Functional Componet = simple, simply rendering data given to it.
    return (
        <div>
            <h2>{props.title}</h2>
            <h4>{props.url}</h4>

            <Link to={`/portfolio/${props.slug}`}>Link</Link>
        </div>
    );
}