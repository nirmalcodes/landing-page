import React from 'react';

const HeroContainer = ({ id }) => {
    return (
        <>
            <div id={id} name={id} className="h-screen bg-red-400 pt-16">
                {`HeroContainer - Id:${id}`}
            </div>
        </>
    );
};

export default HeroContainer;
