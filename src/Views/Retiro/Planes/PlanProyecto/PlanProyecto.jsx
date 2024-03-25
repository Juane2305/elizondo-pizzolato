import React from 'react';
import { FaRegCircleDot, FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PlanProyecto = () => {

    useEffect(() => {
        // Scroll hacia arriba cuando se monta el componente
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='pt-28 bg-[url("https://res.cloudinary.com/dfschbyq2/image/upload/v1710173767/Dise%C3%B1o_sin_t%C3%ADtulo_24_m0ywdj.png")] bg-center bg-no-repeat'>
            <Link to='/retiro' className='ml-10 border-2 px-3 py-1 rounded-full border-blue-950 hover:bg-blue-950 hover:text-white fixed'>Volver</Link>
            <h3 className='text-center text-orange-400 text-5xl font-black'>Plan Proyecto</h3>
            <section className='flex justify-center'>
                <div className='w-[50%] flex flex-col pt-10 space-y-5'>
                    <h3 className='text-center pb-5 font-semibold opacity-70'>El Plan Proyecto es un programa de inversión simple, práctico y adaptado a tus posibilidades.</h3>
                    <p className=' opacity-80 leading-loose'>Con un ahorro inicial y contribuciones periódicas, accedés a una cuenta donde se acumula tu capital y la rentabilidad que la Compañía te transfiere mensualmente.
                    </p>
                    <p className='opacity-80'>Así vas a poder concretar tus proyectos:
                    </p>
                    <div className='flex items-center space-x-4'>
                        <FaRegCircleDot className='text-orange-600'/>
                        <span>Una casa.
                        </span>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <FaRegCircleDot className='text-orange-600'/>
                        <span>La universidad de tus hijos.
                        </span>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <FaRegCircleDot className='text-orange-600'/>
                        <span>Fondo de respaldo para tu familia.
                        </span>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <FaRegCircleDot className='text-orange-600'/>
                        <span>Iniciar tu emprendimiento
                        </span>
                    </div>
                    <p className='opacity-80 text-center pt-5'>En todo momento contás con la asistencia personalizada de tu asesor exclusivo.
Para hacer realidad tus sueños, <span className='text-orange-600'>¡empezá a ahorrar hoy!</span></p>
                </div>
            </section>
            <section className='pt-20 flex flex-col items-center'>
                <div className='w-[30%] shadow-md py-10 rounded-lg transform hover:scale-[1.01] duration-200'>
                    <span className='flex justify-center opacity-50 pb-2'>Rentabilidad Anual</span>
                    <h4 className='flex justify-center text-2xl font-semibold text-orange-500'>Rentabilidad del Plan Proyecto</h4>
                    <div className='w-full flex justify-center items-center'>
                    <div className="border-t-2 border-orange-400 w-[20%] my-4 animate-pulse duration-2000"></div>
                    </div>
                    <div className='flex justify-evenly items-center'>
                        <p className='text-lg'>En dólares</p>
                        <FaArrowRightLong className='size-12 text-orange-600'/>
                        <span className='text-4xl'>4,2%</span>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                    <div className="border-t-2 border-orange-400 w-[20%] my-4 animate-pulse duration-2000"></div>
                    </div>
                    <div className='flex justify-evenly items-center'>
                        <p className='text-lg pl-2'>En pesos</p>
                        <FaArrowRightLong className='size-12 text-orange-600 ml-8'/>
                        <span className='text-4xl'>264%</span>
                    </div>
                </div>
                    <button className='my-10 px-4 py-2 border-2 border-orange-600 bg-orange-600 text-white hover:text-black hover:bg-transparent'><a href="">Pedir más información</a></button>
            </section>
        </div>
    );
};

export default PlanProyecto;