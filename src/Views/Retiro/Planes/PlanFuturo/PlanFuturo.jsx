import React from 'react';
import { FaRegCircleDot, FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PlanFuturo = () => {

    useEffect(() => {
        // Scroll hacia arriba cuando se monta el componente
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='pt-28 bg-[url("https://res.cloudinary.com/dfschbyq2/image/upload/v1709936680/Dise%C3%B1o_sin_t%C3%ADtulo_23_dfxcuw.png")] bg-center bg-no-repeat'>
            <Link to='/retiro' className='fixed ml-10 border-2 px-3 py-1 rounded-full border-blue-950 hover:bg-blue-950 hover:text-white'>Volver</Link>
            <h3 className='flex w-full justify-center font-black text-green-800 text-5xl'>Plan Futuro</h3>
            <section className='flex justify-center'>
                <div className='w-[50%] flex flex-col pt-16 space-y-5'>
                    <p className=' opacity-80 leading-loose'>Este programa implica realizar aportes periódicos con una planificación profesional y adecuada para mantener el nivel de tus ingresos futuros. Complementa tus contribuciones y evita depender de la jubilación mínima. ¡Diseña tu plan! Podés elegir el monto del aporte, la frecuencia, la fecha de retiro y la forma de cobro.
                    </p>
                    <p className='opacity-80'>Al momento de retirarte, también podés seleccionar la modalidad de renta que mejor se ajuste a tus objetivos:
                    </p>
                    <div className='flex items-center space-x-4'>
                        <FaRegCircleDot className='text-green-600'/>
                        <span>Renta Vitalicia o temporal de pago mensual.
                        </span>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <FaRegCircleDot className='text-green-600'/>
                        <span>Retiro total del fondo.
                        </span>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <FaRegCircleDot className='text-green-600'/>
                        <span>Retiro parcial del fondo combinado con una renta de pago mensual.
                        </span>
                    </div>
                    <p className='opacity-80'>Para convertir tus sueños en realidad, <span className='text-green-600'>¡comenzá a ahorrar hoy mismo!</span></p>
                </div>
            </section>
            <section className='pt-20 flex flex-col items-center'>
                <div className='w-[30%] shadow-md py-10 rounded-lg transform hover:scale-[1.01] duration-200'>
                    <span className='flex justify-center opacity-50 pb-2'>Rentabilidad Anual</span>
                    <h4 className='flex justify-center text-2xl font-semibold text-green-600'>Rentabilidad del Plan Futuro</h4>
                    <div className='w-full flex justify-center items-center'>
                    <div className="border-t-2 border-green-700 w-[20%] my-4 animate-pulse duration-2000"></div>
                    </div>
                    <div className='flex justify-evenly items-center'>
                        <p className='text-lg'>En dólares</p>
                        <FaArrowRightLong className='size-12 text-green-600'/>
                        <span className='text-4xl'>4,1%</span>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                    <div className="border-t-2 border-green-700 w-[20%] my-4 animate-pulse duration-2000"></div>
                    </div>
                    <div className='flex justify-evenly items-center'>
                        <p className='text-lg pl-2'>En pesos</p>
                        <FaArrowRightLong className='size-12 text-green-600 ml-8'/>
                        <span className='text-4xl'>264%</span>
                    </div>
                </div>
                <button className='my-10 px-4 py-2 border-2 border-green-600 bg-green-600 text-white hover:text-black hover:bg-transparent'><a href="">Pedir más información</a></button>
            </section>
            
        </div>
    );
};

export default PlanFuturo;