import React, { useEffect, useState } from 'react';
import {
    AboutUsContainer,
    ClientsContainer,
    ContactUsContainer,
    HeroContainer,
    ServicesContainer,
} from '../../container';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
    const [currentSection, setCurrentSection] = useState('');
    const location = useLocation();

    return (
        <>
            <HeroContainer id="home" />
            <ServicesContainer id="services" />
            <AboutUsContainer id="aboutUs" />
            <ClientsContainer id="ourClients" />
            <ContactUsContainer id="contactUs" />
        </>
    );
};

export default HomePage;
