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

        const { id, description, thumb_image_url, logo_url} = props.item;
    return (
        <div className="portfolio-item-wrapper">
            <div 
                className="portfolio-img-background"
                style={{
                    backgroundImage: "url(" + thumb_image_url + ")"
                }}
            />

            <div className="image-text-wrapper">
                <div className="logo-wrapper">
                    <img src={logo_url} />
                </div>

                <div className="subtitle">{description}</div>
            </div>


        </div>
    );
}