import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Hero = props => {
    const { imageArray } = props;
    const [currentPhoto, setCurrentPhoto] = useState(0);

    const cyclePhoto = n => {
        if (currentPhoto+n < 0 || currentPhoto+n >= imageArray.length) return;
        setCurrentPhoto(currentPhoto + n);
    }

    return (
        <div>
            <div className="image-carousel position-relative">
                <img className="image-carousel-photo" src={imageArray[currentPhoto]} alt="test" />
                <button
                    className={`button ${ currentPhoto <= 0 ? 'button--disabled' : ''} position-absolute top-0 bottom-0 left-0`}
                    type="button"
                    onClick={() => cyclePhoto(-1)}
                >
                    left
                </button>
                <button
                    className={`button ${ currentPhoto >= imageArray.length-1 ? 'button--disabled' : ''} position-absolute top-0 bottom-0 right-0`}
                    type="button"
                    onClick={() => cyclePhoto(1)}
                >
                    Right
                </button>
            </div>
        </div>
    );
}

Hero.propTypes = {
    imageArray: PropTypes.array,
}

export default Hero;