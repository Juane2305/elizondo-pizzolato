import React from 'react';
import { FaRegCircleDot, FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PlanFuturo = () => {

    useEffect(() => {
        // Scroll hacia arriba cuando se monta el componente
        window.scrollTo(0, 0);
      }, []);

      const handleConsultClick = () => {

        let message = "Hola, me gustaria obtener mas información sobre el Plan Futuro"
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/+542613674277?text=${encodedMessage}`;
    
        window.location.href = whatsappLink;
    };

    return (
        <div className='pt-28 bg-[url("https://res.cloudinary.com/dfschbyq2/image/upload/v1709936680/Dise%C3%B1o_sin_t%C3%ADtulo_23_dfxcuw.png")] bg-center bg-no-repeat bg-cover bg-fixed'>
            <Link to='/retiro' className='hidden lg:block fixed ml-10 font-bold text-green-600 border-2 border-green-600 py-2 px-4 shadow-md hover:text-white hover:bg-green-500 duration-300'>Volver</Link>
            <h3 className='flex w-full justify-center font-black text-green-700 text-5xl'>Plan Futuro</h3>
            <section className='flex justify-center'>
                <div className='lg:w-[50%] flex flex-col pt-5 lg:pt-16 space-y-5 px-5 lg:px-0'>
                    <p className='text-center lg:text-start leading-loose'>Este programa implica realizar aportes periódicos con una planificación profesional y adecuada para mantener el nivel de tus ingresos futuros. Complementa tus contribuciones y evita depender de la jubilación mínima. ¡Diseña tu plan! Podés elegir el monto del aporte, la frecuencia, la fecha de retiro y la forma de cobro.
                    </p>
                    <p className='opacity-80'>Al momento de retirarte, también podés seleccionar la modalidad de renta que mejor se ajuste a tus objetivos:
                    </p>
                    <div className='flex justify-start items-center gap-2 w-full'>
                        <div>
                            <FaRegCircleDot className='text-green-600 size-5' />
                        </div>
                        <span>Renta Vitalicia o temporal de pago mensual.</span>
                    </div>
                    <div className='flex justify-start items-center gap-2 w-full'>
                        <div>
                            <FaRegCircleDot className='text-green-600 size-5' />
                        </div>
                        <span>Retiro total del fondo.</span>
                    </div>
                    <div className='flex justify-start items-center gap-2 w-full'>
                        <div>
                            <FaRegCircleDot className='text-green-600 size-5'/>
                        </div>
                        <span>Retiro parcial del fondo combinado con una renta de pago mensual.</span>
                    </div>
                    <p className='opacity-80'>Para convertir tus sueños en realidad, <span className='text-green-600'>¡comenzá a ahorrar hoy mismo!</span></p>
                </div>
            </section>
            <section className='lg:pt-20 px-5 lg:px-0 pt-10 flex flex-col items-center'>
                <div className='lg:w-[35%] flex flex-col justify-center items-center gap-5 shadow-xl p-5 duration-200'>
                    <div className='border-b-2 pb-2'>
                        <p className='text-center opacity-50 pb-2'>Rentabilidad Anual</p>
                        <h4 className='text-2xl font-bold text-green-600 text-center'>Rentabilidad del Plan Futuro</h4>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 w-full'>
                        <article className='flex justify-between items-center w-full'>
                            <p className='text-lg w-28'>En dólares</p>
                            <FaArrowRightLong className='size-12 text-green-600'/>
                            <span className='text-4xl text-end w-28'>4,1%</span>
                        </article>
                        <article className='flex justify-between items-center w-full'>
                            <p className='text-lg w-28'>En pesos</p>
                            <FaArrowRightLong className='size-12 text-green-600'/>
                            <span className='text-4xl text-end w-28'>264%</span>
                        </article>
                    </div>
                </div>
                <button onClick={handleConsultClick} className='my-10 font-bold text-white bg-green-700 p-4 shadow-xl hover:bg-green-400 duration-300'>Pedir más información</button>
            </section>
        </div>
    );
};

export default PlanFuturo;