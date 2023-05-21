import React from 'react';

const ServicesContainer = ({ id }) => {
    return (
        <>
            <div id={id} name={id} className="h-screen bg-blue-400 pt-16">
                {`ServicesContainer - Id:${id}`}
            </div>
        </>
    );
};

export default ServicesContainer;
