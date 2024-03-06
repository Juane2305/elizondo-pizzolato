import React from 'react';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Nosotros from '../../Components/Nosotros/Nosotros';
import Contact from '@/Components/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Nosotros/>
            <Contact/>
        </div>
    );
};

export default Home;