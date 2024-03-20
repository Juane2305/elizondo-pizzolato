import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Nosotros from '../../Components/Nosotros/Nosotros';
import Contact from '@/Components/Contact/Contact';
import Navbar from '@/Components/Navbar/Navbar';
import Seguros from '@/Components/Seguros/Seguros';
import Ubicacion from '@/Components/Ubicacion/Ubicacion';
import Empresas from '@/Components/Empresas/Empresas';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Empresas/>
            <Seguros/>
            <Nosotros/>
            <Ubicacion/>
            <Contact/>
        </div>
    );
};

export default Home;