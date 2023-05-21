import React from 'react';

const ClientsContainer = ({ id }) => {
    return (
        <>
            <div id={id} name={id} className="h-screen bg-indigo-400 pt-16">
                {`ClientsContainer - Id:${id}`}
            </div>
        </>
    );
};

export default ClientsContainer;
