import React from 'react';

const ContactUsContainer = ({ id }) => {
    return (
        <>
            <div id={id} name={id} className="h-screen bg-pink-400 pt-16">
                {`ContactUsContainer - Id:${id}`}
            </div>
        </>
    );
};

export default ContactUsContainer;
