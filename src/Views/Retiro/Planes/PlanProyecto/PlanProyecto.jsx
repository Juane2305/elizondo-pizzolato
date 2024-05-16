import React from 'react';
import { FaRegCircleDot, FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PlanProyecto = () => {

    useEffect(() => {
        // Scroll hacia arriba cuando se monta el componente
        window.scrollTo(0, 0);
      }, []);

      const handleConsultClick = () => {

        let message = "Hola, me gustaria obtener mas información sobre el Plan Proyecto"
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/+542613674277?text=${encodedMessage}`;
    
        window.location.href = whatsappLink;
    };

    return (
        <div className='pt-28 bg-[url("https://res.cloudinary.com/dfschbyq2/image/upload/v1710173767/Dise%C3%B1o_sin_t%C3%ADtulo_24_m0ywdj.png")] bg-center bg-no-repeat bg-cover bg-fixed'>
            <Link to='/retiro' className='hidden lg:block fixed ml-10 font-bold text-orange-600 border-2 border-orange-600 py-2 px-4 shadow-md hover:text-white hover:bg-orange-500 duration-300'>Volver</Link>
            <h3 className='text-center text-orange-400 text-5xl font-black'>Plan Proyecto</h3>
            <section className='flex justify-center'>
                <div className='lg:w-[50%] flex flex-col pt-5 lg:pt-16 space-y-5 px-5 lg:px-0'>
                    <h3 className='text-center pb-5 font-semibold opacity-70'>El Plan Proyecto es un programa de inversión simple, práctico y adaptado a tus posibilidades.</h3>
                    <p className=' opacity-80 leading-loose'>Con un ahorro inicial y contribuciones periódicas, accedés a una cuenta donde se acumula tu capital y la rentabilidad que la Compañía te transfiere mensualmente.
                    </p>
                    <p className='opacity-80'>Así vas a poder concretar tus proyectos:
                    </p>
                    <div className='flex justify-start items-center gap-2 w-full'>
                        <div>
                            <FaRegCircleDot className='text-orange-600 size-5'/>
                        </div>
                        <span>Una casa.
                        </span>
                    </div>
                    <div className='flex justify-start items-center gap-2 w-full'>
                        <div>
                            <FaRegCircleDot className='text-orange-600 size-5'/>
                        </div>
                        <span>La universidad de tus hijos.
                        </span>
                    </div>
                    <div className='flex justify-start items-center gap-2 w-full'>
                        <div>
                            <FaRegCircleDot className='text-orange-600 size-5'/>
                        </div>
                        <span>Fondo de respaldo para tu familia.
                        </span>
                    </div>
                    <div className='flex justify-start items-center gap-2 w-full'>
                        <div>
                            <FaRegCircleDot className='text-orange-600 size-5'/>
                        </div>
                        <span>Iniciar tu emprendimiento
                        </span>
                    </div>
                    <p className='opacity-80 text-center pt-5'>En todo momento contás con la asistencia personalizada de tu asesor exclusivo. Para hacer realidad tus sueños, <span className='text-orange-600'>¡empezá a ahorrar hoy!</span></p>
                </div>
            </section>
            <div className='flex justify-center pt-10'>
                <article className='flex flex-col lg:justify-center lg:items-start justify-center items-center text-[#79a471] shadow-md p-6 rounded-full w-[50%] lg:w-auto'>
                    <span className='font-semibold opacity-80'>Inversión en Dólares</span>
                    <p className='font-light'>Aporte inicial: <span className='font-semibold opacity-80'>U$S 1000.</span></p>
                    <p className='font-light'>Aporte Mensual: <span className='font-semibold opacity-80'>Elegís el monto.</span></p>
                </article>
            </div>
            <section className='lg:pt-20 px-5 lg:px-0 pt-10 flex flex-col items-center'>
                <div className='lg:w-[35%] flex flex-col justify-center items-center gap-5 shadow-xl p-5 duration-200'>
                    <div className='border-b-2 pb-2'>
                        <p className='text-center opacity-50 pb-2'>Rentabilidad Anual</p>
                        <h4 className='text-center text-2xl font-bold text-orange-600'>Rentabilidad del Plan Proyecto</h4>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 w-full'>
                        <article className='flex justify-between items-center w-full'>
                            <p className='text-lg w-28'>En dólares</p>
                            <FaArrowRightLong className='size-12 text-orange-600'/>
                            <span className='text-4xl text-end w-28'>4,2%</span>
                        </article>
                        <article className='flex justify-between items-center w-full'>
                            <p className='text-lg w-28'>En pesos</p>
                            <FaArrowRightLong className='size-12 text-orange-600'/>
                            <span className='text-4xl text-end w-28'>287%</span>
                        </article>
                    </div>
                </div>
                <button onClick={handleConsultClick} className='my-10 font-bold text-white bg-orange-600 p-4 shadow-xl hover:bg-orange-400 duration-300'>Pedir más información</button>
            </section>
        </div>
    );
};

export default PlanProyecto;