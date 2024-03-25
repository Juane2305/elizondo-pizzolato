import React from 'react';
import { Link } from 'react-router-dom';
import empresas from '../Empresas/empresas.json'
import automotores from '../Personas/automotores.json'
import { useEffect } from 'react';

const Empresas = () => {

    useEffect(() => {
        // Scroll hacia arriba cuando se monta el componente
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='bg-[#f2f2f2]'>
            <div className='relative h-[30rem] z-20'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710808603/Pizzolato/kelly-sikkema-XXherw1ujoI-unsplash_omdnzx.jpg" alt="" className='h-full w-full object-cover brightness-[.35]'/>
                <h1 className='absolute bottom-10 left-10 text-white font-bold text-6xl'>Seguros para empresas</h1>
                <p className='absolute bottom-5 left-10 text-white text-xl'><a href="/" className='text-[#f29494] hover:text-[#0830A6] duration-300'>HOME</a>/EMPRESAS</p>
            </div>
            <section className='flex flex-col justify-center items-center gap-5 py-20 relative z-10'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710860408/Pizzolato/asset_7_xdpjnm.svg" alt="" className='absolute -z-10 -left-16 w-[25rem] opacity-60'/>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710860408/Pizzolato/asset_7_xdpjnm.svg" alt="" className='absolute -z-50 right-0 w-[25rem] rotate-180 top-[40rem] opacity-60'/>
                <h2 className='text-5xl font-bold text-[#0830A6]'>Protegé tu vida y tus bienes</h2>
                <p className='w-[60%] text-center text-gray-500 font-medium'>
                Enfrentá el futuro con confianza sabiendo que <span className='text-[#0830A6]'>estás protegido</span>. Nuestros seguros ofrecen <span className='text-[#0830A6]'>tranquilidad y seguridad</span> para vos y tu familia en todas las áreas importantes de tu vida, desde tu hogar hasta tu vehículo y más allá. Con coberturas flexibles y atención personalizada, te brindamos la tranquilidad que necesitas para <span className='text-[#0830A6]'>vivir sin preocupaciones</span>
                </p>
            </section>
            <section className='flex justify-center items-center gap-10 flex-wrap pb-10'>
                {automotores.map((automotor) =>(
                <Link to={`/empresas/vehiculos/${automotor.target}`} key={automotor.id} className='w-[30rem] h-[15rem] flex justify-between items-center gap-4 bg-white shadow-xl hover:scale-[1.03] duration-300 z-10'>
                    <div className='w-1/2 pl-5 flex flex-col gap-2'>
                    <h2 className='text-[#0830A6] font-bold text-2xl'>{automotor.title}</h2>
                    <p className='text-gray-500 text-sm font-medium'>{automotor.description}</p>
                    </div>
                    <div className='border-l-[1rem] border-[#f29494] rounded-bl-[15rem] w-1/2 h-full'>
                    <img src={automotor.image} alt="" className='w-full h-full object-cover rounded-bl-[15rem]'/>
                    </div>
                </Link>
                ))}
                {empresas.map((empresa) =>(
                <Link to={`/empresas/${empresa.target}`} key={empresa.id} className='w-[30rem] h-[15rem] flex justify-between items-center gap-4 bg-white shadow-xl hover:scale-[1.03] duration-300 z-10'>
                    <div className='w-1/2 pl-5 flex flex-col gap-2'>
                    <h2 className='text-[#0830A6] font-bold text-2xl'>{empresa.title}</h2>
                    <p className='text-gray-500 text-sm font-medium'>{empresa.description}</p>
                    </div>
                    <div className='border-l-[1rem] border-[#f29494] rounded-bl-[15rem] w-1/2 h-full'>
                    <img src={empresa.image} alt="" className='w-full h-full object-cover rounded-bl-[15rem]'/>
                    </div>
                </Link>
                ))}
            </section>
        </div>
    );
};

export default Empresas;