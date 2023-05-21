import React from 'react';

const AboutUsContainer = ({ id }) => {
    return (
        <>
            <div id={id} name={id} className="h-screen bg-green-400 pt-16">
                {`AboutUsContainer - Id:${id}`}
            </div>
        </>
    );
};

export default AboutUsContainer;
