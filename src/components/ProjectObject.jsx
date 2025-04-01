import React from 'react'
import openLinkIcon from '../assets/open-in-new.svg'
import ImageCarousel from "./ImageCarousel";

export default function Project({images, title, description, live, source, date }) {
    const openLinkIconElement = <img src={openLinkIcon} alt='Open link icon' width='15px' className='icon' />

    return <div className="project-container">
        <span className="light-font">{date}</span>
        <h2>{title}</h2>
        {images && <ImageCarousel images={images} />}
        <p>{description}</p>
        <div className="links">
            {live && <a href={live} target="_blank" rel="noopener noreferrer">
                Visit {openLinkIconElement}
            </a>}

            {source && <a href={source} target="_blank" rel="noopener noreferrer">
                Source {openLinkIconElement}
            </a>}
        </div>
        
    </div>
}