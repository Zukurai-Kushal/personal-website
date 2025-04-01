import { useState } from "react"
import leftArrowIcon from '../assets/chevron-left.svg'
import rightArrowIcon from '../assets/chevron-right.svg'
import circleDotIcon from '../assets/circle-slice-8.svg'
import circleIcon from '../assets/circle-outline.svg'
import '../styles/imageCarousel.css'

export default function ImageCarousel({ images }) {
    const [imageIndex, setImageIndex] = useState(0);

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return images.length - 1;
            return index - 1;
        })
    }

    function showNextImage() {
        setImageIndex(index => {
            if (index === images.length -1) return 0;
            return index + 1;
        })
    }

    return (
        <div className="image-carousel" >
            <div className="image-container">
                {images.map(url => (
                    <img key={url} src={url} className="image-carousel-image" style={{translate: `${-100 * imageIndex}%`}}/>
                ))}
            </div>
            {images.length > 1 && <div className="image-carousel-ui">
                <div className="arrow-buttons">
                    <button
                        onClick={showPrevImage}
                        aria-label="View Previous Image"    
                    >
                        <img src={leftArrowIcon} alt="left" className="icon" width="15px"/>
                    </button>
                    <button
                        onClick={showNextImage}
                        aria-label="View Next Image"    
                    >
                        <img src={rightArrowIcon} alt="right" className="icon" width="15px"/>
                    </button>
                </div>
                <div className="index-buttons">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setImageIndex(index)}
                            aria-label={`View Image ${index}`}
                        >
                            <img src={index === imageIndex? circleDotIcon : circleIcon} className="icon" width="10px"/>
                        </button>
                    ))}

                </div>
            </div>}
        </div>    
    )
}