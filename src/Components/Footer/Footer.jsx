import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className='bg-[#0830A6] pt-14 shadow-xl z-20'>
            <div className='flex justify-between items-center px-10'>
                <section>
                <a href='/' className=" sm:flex z-30 duration-300 cursor-pointer py-2 px-4 hover:animate-jiggle  font-bold"><img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1711645269/Dise%C3%B1o_sin_t%C3%ADtulo__32_-removebg-preview_upscayl_4x_realesrgan-x4plus_lum9qe.png" alt="" className='w-48'/></a>
                </section>
                <section className='lg:flex lg:flex-row-reverse flex flex-col justify-center items-center text-white'>
                    <div className='flex justify-center items-center gap-3'>
                        <FaInstagram className='size-6 cursor-pointer hover:text-[#F29494] duration-300'/>
                        <FaFacebookF className='size-6 cursor-pointer hover:text-[#F29494] duration-300'/>
                        <FaWhatsapp className='size-6 cursor-pointer hover:text-[#F29494] duration-300'/>
                    </div>
                    <div className='space-x-4 pr-6 font-medium hidden lg:flex'>
                        <Link className='hover:text-[#F29494] duration-300'>Inicio</Link>
                        <Link className='hover:text-[#F29494] duration-300'>Seguros</Link>
                        <Link className='hover:text-[#F29494] duration-300'>Sobre Nosotros</Link>
                        <Link className='hover:text-[#F29494] duration-300'>Contacto</Link>
                    </div>
                </section>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className="border-t-2 border-[#e4e3e1] w-[20%] my-4"></div>
            </div>
            <div className='flex flex-col gap-2 text-center text-white opacity-90 py-5'>
                <p className='text-sm'>©2024 Pizzolato Elizondo. Todos los derechos reservados.</p>
                <span className='text-[#F29494] font-bold'><a target='_blank' href="https://elizca.com">Hecho por Elizca.</a></span>
            </div>
        </div>
    );
};

export default Footer;