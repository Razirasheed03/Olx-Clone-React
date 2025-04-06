import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ImageSlider({ images = [] }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, 
        
    }

    if (!images.length) {
        return <p>No images available</p>
    }

    return (
        <Slider {...settings}>
            {images.map((url, index) => (
                <div key={index}>
                    <img 
                        src={url} 
                        alt={`Product Image ${index + 1}`} 
                        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                    />
                </div>
            ))}
        </Slider>
    )
}

export default ImageSlider
