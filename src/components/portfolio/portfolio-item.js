import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioContainer from './portfolio-container';

export default function(props) {
    //Functional Componet = simple, simply rendering data given to it.

         //Data that we'll need:
        // - background Image : thumb_image_url
        // - logo : logo_url
        // - description : description
        // - id : id
        // position

        const { id, description, thumb_image_url, logo} = props.item;
    return (
        <div className="portfolio-item-wrapper">
            <div 
                className="portfolio-img-background"
                style={{
                    backgroundImage: "url(" + thumb_image_url + ")"
                }}
            />

            <img src={logo} />
            <div>{description}</div>
            <Link to={`/portfolio/${props.id}`}>Link</Link>
        </div>
    );
}