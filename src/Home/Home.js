import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactForm from './ContactForm';
import HeroTechNews from './HeroTechNews';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
        <Banner />
        <Parts />
        <HeroTechNews />
        <BusinessSummary />
        <ContactForm />
        <Reviews />
        </div>
    );
};

export default Home;