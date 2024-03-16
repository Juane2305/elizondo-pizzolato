import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Nosotros from '../../Components/Nosotros/Nosotros';
import Contact from '@/Components/Contact/Contact';
import Navbar from '@/Components/Navbar/Navbar';
import Seguros from '@/Components/Seguros/Seguros';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Seguros/>
            <Nosotros/>
            <Contact/>
        </div>
    );
};

export default Home;