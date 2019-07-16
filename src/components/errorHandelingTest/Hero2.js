import React from 'react';
import WithErrorHandler from '../../hoc/withErrorHandler'

const Hero2 = ({heroName}) => {

    if(heroName==='Catman'){
        throw new Error(`${heroName} is not a Hero`);
    }

    return (
        <div>
            <p>Hero2 name: {heroName}</p>
        </div>
    );
};

export default WithErrorHandler(Hero2);