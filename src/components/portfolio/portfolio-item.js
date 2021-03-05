import React from 'react';

export default function(props) {
    //Functional Componet = simple, simply rendering data given to it.
    return (
        <div>
            <h2>{props.title}{props.url}</h2>
        </div>
    );
}