import React from 'react';

const Hero = ({heroName}) => {

    if(heroName==='Joker'){
        throw new Error(`${heroName} is not a Hero`);
    }

    return (
        <div>
            <p>Hero name: {heroName}</p>
        </div>
    );
};

export default Hero;