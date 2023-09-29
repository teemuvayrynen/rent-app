import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ImageCarousel() {
    return (
        <Carousel swipeable={true} emulateTouch={true} showThumbs={false} dynamicHeight={false}>
            <div style={{borderRadius: '10px'}}>
                <img src="https://source.unsplash.com/178j8tJrNlc" alt="Image 1" style={{borderRadius: '10px'}}/>
            </div>
            <div style={{borderRadius: '10px'}}>
                <img src="https://source.unsplash.com/tHkJAMcO3QE" alt="Image 2" style={{borderRadius: '10px'}}/>
            </div>
            <div style={{borderRadius: '10px'}}>
                <img src="https://source.unsplash.com/gREquCUXQLI" alt="Image 3" style={{borderRadius: '10px'}}/>
            </div>
        </Carousel>
    );
}

export default ImageCarousel;
