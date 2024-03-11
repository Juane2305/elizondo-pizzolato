import React from 'react';
import { FaRegCircleDot, FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const PlanInversorGold = () => {
    return (
        <div className='pt-28 bg-[url("https://res.cloudinary.com/dfschbyq2/image/upload/v1710184295/Dise%C3%B1o_sin_t%C3%ADtulo_26_twd6wf.png")] bg-center bg-no-repeat'>
            <Link to='/retiro' className='ml-10 border-2 px-3 py-1 rounded-full border-blue-950 hover:bg-blue-950 hover:text-white fixed'>Volver</Link>
            <h3 className='flex w-full justify-center font-black text-[#cca352] text-5xl'>Plan Inversor Gold</h3>
            <section className='flex justify-center'>
                <div className='w-[50%] flex flex-col pt-16 space-y-5'>
                    <p className=' opacity-70 leading-loose text-center font-semibold pb-5'>El Plan Inversor Gold es la opción que resguarda tu capital y te da la chance de obtener rendimientos por encima de los métodos de ahorro convencionales.
                    </p>
                    <p className='opacity-80'>Desde <span className='font-semibold'>$ 100.000 o U$S 5.000</span>, formás parte de una cartera diversificada de activos financieros, <span className='font-semibold'>con garantía del 100% del capital</span> y una tasa mínima de rendimiento asegurada por ley.
                    </p>
                    <p className='pt-5'>En todo momento tenés la <span className='font-semibold opacity-80'>asistencia personalizada</span> de tu asesor exclusivo. <span className='text-[#cca352]'>¡Invertí hoy y empezá a ganar!</span></p>
                    <section className='flex justify-around pt-10'>
                        <article className='flex flex-col text-blue-900 shadow-md p-6 rounded-full'>
                        <span className='font-semibold opacity-80 '>Inversión en Pesos</span>
                            <p className='font-light'>Aporte inicial: <span className='font-semibold opacity-80'>$ 100.000.</span></p>
                            <p className='font-light'>Aporte Mensual: <span className='font-semibold opacity-80'>Elegís el monto.</span></p>
                        </article>
                        <article className='flex flex-col text-[#79a471] shadow-md p-6 rounded-full'>
                            <span className='font-semibold opacity-80'>Inversión en Dólares</span>
                            <p className='font-light'>Aporte inicial: <span className='font-semibold opacity-80'>U$S 5000.</span></p>
                            <p className='font-light'>Aporte Mensual: <span className='font-semibold opacity-80'>Elegís el monto.</span></p>
                        </article>
                    </section>
                </div>
            </section>
            <section className='pt-20 flex flex-col items-center'>
                <div className='w-[30%] shadow-md py-10 rounded-lg transform hover:scale-[1.01] duration-200'>
                    <span className='flex justify-center opacity-50 pb-2'>Rentabilidad Anual</span>
                    <h4 className='flex justify-center text-2xl font-semibold text-[#cca352]'>Rentabilidad del Plan Inversor Gold</h4>
                    <div className='w-full flex justify-center items-center'>
                    <div className="border-t-2 border-[#cca352] w-[20%] my-4 animate-pulse duration-2000"></div>
                    </div>
                    <div className='flex justify-evenly items-center'>
                        <p className='text-lg'>En dólares</p>
                        <FaArrowRightLong className='size-12 text-[#cca352]'/>
                        <span className='text-4xl'>4,4%</span>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                    <div className="border-t-2 border-[#cca352] w-[20%] my-4 animate-pulse duration-2000"></div>
                    </div>
                    <div className='flex justify-evenly items-center'>
                        <p className='text-lg pl-2'>En pesos</p>
                        <FaArrowRightLong className='size-12 text-[#cca352] ml-6'/>
                        <span className='text-4xl'>298%</span>
                    </div>
                </div>
                <button className='my-10 px-4 py-2 border-2 border-[#cca352] bg-[#cca352] text-white hover:text-black hover:bg-transparent'>Pedir más información</button>
            </section>
            
        </div>
    );
};

export default PlanInversorGold;