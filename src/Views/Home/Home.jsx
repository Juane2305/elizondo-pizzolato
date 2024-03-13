import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Nosotros from '../../Components/Nosotros/Nosotros';
import Contact from '@/Components/Contact/Contact';
import Navbar from '@/Components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Nosotros/>
            <Contact/>
        </div>
    );
};

export default Home;