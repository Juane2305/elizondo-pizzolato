import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-blue-950  pt-14'>
            <div className='flex justify-between items-center'>
                <section>
                    <h1 className='pl-8 text-white'>logo</h1>
                </section>
                <section className='flex flex-row-reverse space-x-4 pr-9 text-white'>
                    <div className='flex pb-4 space-x-4'>
                        <FaInstagram className='size-6'/>
                        <FaFacebookF className='size-6'/>
                        <FaWhatsapp className='size-6'/>
                    </div>
                    <div className='space-x-4 pr-6'>
                        <Link>Inicio</Link>
                        <Link>Seguros</Link>
                        <Link>Sobre Nosotros</Link>
                        <Link>Contacto</Link>
                    </div>
                </section>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className="border-t-2 border-[#e4e3e1] w-[20%] my-4"></div>
            </div>
            <div className='text-center text-white opacity-90 py-5'>
                <p>©2024 Pizzolato Elizondo. Todos los derechos reservados.</p>
                <span><a target='_blank' href="https://elizca.com">Hecho por Elizca.</a></span>
            </div>
        </div>
    );
};

export default Footer;