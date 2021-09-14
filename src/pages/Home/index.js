import React from 'react';
import Hero from './hero';

import Images from '../../components/images'


const Homepage = () => {

    const images = [Images.bg1, Images.bg2, Images.bg3];

    return (
        <>
            <h1>This is homepage</h1>
            <Hero imageArray={images} />
        </>
    )
};

export default Homepage;