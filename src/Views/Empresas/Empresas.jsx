import React from 'react';
import { Link } from 'react-router-dom';
import empresas from '../Empresas/empresas.json'
import { useEffect } from 'react';
import automotoresEmpresas from '../Empresas/automotoresEmpresas.json'

const Empresas = () => {

    useEffect(() => {
        // Scroll hacia arriba cuando se monta el componente
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='bg-[#f2f2f2]'>
            <div className='relative h-[30rem] z-20'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710808603/Pizzolato/kelly-sikkema-XXherw1ujoI-unsplash_omdnzx.jpg" alt="" className='h-full w-full object-cover brightness-[.35]'/>
                <h1 className='absolute bottom-16 left-5 lg:left-10 text-white font-bold text-4xl lg:text-6xl'>Seguros para empresas</h1>
                <p className='absolute bottom-5 left-5 lg:left-10 text-white lg:text-xl'><Link to="/" className='text-[#f29494] hover:text-white duration-300'>HOME</Link>/EMPRESAS</p>
            </div>
            <section className='flex flex-col justify-center items-center gap-5 py-20 relative z-10'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710860408/Pizzolato/asset_7_xdpjnm.svg" alt="" className='absolute -z-10 -left-16 w-[25rem] opacity-60 hidden lg:block'/>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710860408/Pizzolato/asset_7_xdpjnm.svg" alt="" className='absolute -z-50 right-0 w-[25rem] rotate-180 top-[40rem] opacity-60 hidden lg:block'/>
                <h2 className='text-3xl lg:text-5xl px-5 lg:px-0 text-center font-bold text-[#0830A6]'>Protegé tu empresa</h2>
                <p className='w-full px-5 lg:px-0 lg:w-[60%] text-center text-gray-500 font-medium'>
                Las mejores opciones de cobertura para proteger tanto al patrimonio de tu empresa como a su personal.
                </p>
            </section>
            <section className='flex justify-center items-center gap-10 flex-wrap pb-10 px-5 lg:px-0'>
                {automotoresEmpresas.map((automotor) =>(
                <Link to={`/empresas/vehiculos/${automotor.target}`} key={automotor.id} className='w-[30rem] h-[15rem] flex justify-between items-center gap-4 bg-white shadow-xl hover:scale-[1.03] duration-300 z-10'>
                    <div className='w-1/2 pl-5 flex flex-col gap-2'>
                    <h2 className='text-[#0830A6] font-bold text-xl lg:text-2xl'>{automotor.title}</h2>
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
                    <h2 className='text-[#0830A6] font-bold text-xl lg:text-2xl'>{empresa.title}</h2>
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