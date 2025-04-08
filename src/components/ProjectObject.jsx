import React from 'react'
import openLinkIcon from '../assets/open-in-new.svg'
import ImageCarousel from "./ImageCarousel";

export default function Project({images, title, description, live, source, date, otherLinks, className=[]}) {
    const openLinkIconElement = <img src={openLinkIcon} alt='Open link icon' width='15px' className='icon' />
    const extraClassNames = className.join(" ");
    return <div className={"project-container "+extraClassNames}>
        <span className="light-font">{date}</span>
        <h2>{title}</h2>
        {images && <ImageCarousel images={images}/>}
        <p>{description}</p>
        <div className="links">
            {live && <a href={live} target="_blank" rel="noopener noreferrer">
                Visit {openLinkIconElement}
            </a>}

            {source && <a href={source} target="_blank" rel="noopener noreferrer">
                Source {openLinkIconElement}
            </a>}

            {otherLinks && otherLinks.map(linkInfo => {
                const linkSrc = linkInfo[0];
                const linkTitle = linkInfo[1];
                return <a key={linkTitle} href={linkSrc} target="_blank" rel="noopener noreferrer">
                    {linkTitle} {openLinkIconElement}
                </a>
            })}
        </div>
        
    </div>
}