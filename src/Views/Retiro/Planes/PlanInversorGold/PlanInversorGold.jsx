import React from 'react';
import { FaRegCircleDot, FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PlanInversorGold = () => {

    useEffect(() => {
        // Scroll hacia arriba cuando se monta el componente
        window.scrollTo(0, 0);
      }, []);

      const handleConsultClick = () => {

        let message = "Hola, me gustaria obtener mas información sobre el Plan Inversor Gold"
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/+542613674277?text=${encodedMessage}`;
    
        window.location.href = whatsappLink;
    };

    return (
        <div className='pt-28 bg-[url("https://res.cloudinary.com/dfschbyq2/image/upload/v1710184295/Dise%C3%B1o_sin_t%C3%ADtulo_26_twd6wf.png")] bg-center bg-no-repeat bg-cover bg-fixed'>
            <Link to='/retiro' className='hidden lg:block fixed ml-10 font-bold text-[#cca352] border-2 border-[#cca352] py-2 px-4 shadow-md hover:text-white hover:bg-[#dfb157] duration-300'>Volver</Link>
            <h3 className='text-center font-black text-[#cca352] text-5xl'>Plan Inversor Gold</h3>
            <section className='flex justify-center'>
                <div className='lg:w-[50%] flex flex-col pt-5 lg:pt-16 space-y-5 px-5 lg:px-0'>
                    <p className='opacity-70 leading-loose text-center font-semibold pb-5'>El Plan Inversor Gold es la opción que resguarda tu capital y te da la chance de obtener rendimientos por encima de los métodos de ahorro convencionales.
                    </p>
                    <p className='opacity-80'>Desde <span className='font-semibold'>$ 100.000 o U$S 5.000</span>, formás parte de una cartera diversificada de activos financieros, <span className='font-semibold'>con garantía del 100% del capital</span> y una tasa mínima de rendimiento asegurada por ley.
                    </p>
                    <p className='pt-5'>En todo momento tenés la <span className='font-semibold opacity-80'>asistencia personalizada</span> de tu asesor exclusivo. <span className='text-[#cca352]'>¡Invertí hoy y empezá a ganar!</span></p>
                    <section className='lg:flex lg:flex-row lg:justify-around flex flex-col justify-center items-center pt-5 lg:pt-10 gap-5'>
                        <article className='flex flex-col lg:justify-center lg:items-start justify-center items-center text-blue-900 shadow-md p-6 rounded-full w-[50%] lg:w-auto'>
                            <span className='font-semibold opacity-80 '>Inversión en Pesos</span>
                            <p className='font-light'>Aporte inicial: <span className='font-semibold opacity-80'>$ 100.000.</span></p>
                            <p className='font-light'>Aporte Mensual: <span className='font-semibold opacity-80'>Elegís el monto.</span></p>
                        </article>
                        <article className='flex flex-col lg:justify-center lg:items-start justify-center items-center text-[#79a471] shadow-md p-6 rounded-full w-[50%] lg:w-auto'>
                            <span className='font-semibold opacity-80'>Inversión en Dólares</span>
                            <p className='font-light'>Aporte inicial: <span className='font-semibold opacity-80'>U$S 5000.</span></p>
                            <p className='font-light'>Aporte Mensual: <span className='font-semibold opacity-80'>Elegís el monto.</span></p>
                        </article>
                    </section>
                </div>
            </section>
            <section className='lg:pt-20 px-5 lg:px-0 pt-10 flex flex-col items-center'>
                <div className='lg:w-[35%] flex flex-col justify-center items-center gap-5 shadow-xl p-5 duration-200'>
                    <div className='border-b-2 pb-2'>
                        <p className='text-center opacity-50 pb-2'>Rentabilidad Anual</p>
                        <h4 className='text-center text-2xl font-bold text-[#cca352]'>Rentabilidad del Plan Inversor Gold</h4>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 w-full'>
                        <article className='flex justify-between items-center w-full'>
                            <p className='text-lg w-28'>En dólares</p>
                            <FaArrowRightLong className='size-12 text-[#cca352]'/>
                            <span className='text-4xl text-end w-28'>4,4%</span>
                        </article>
                        <article className='flex justify-between items-center w-full'>
                            <p className='text-lg w-28'>En pesos</p>
                            <FaArrowRightLong className='size-12 text-[#cca352]'/>
                            <span className='text-4xl text-end w-28'>298%</span>
                        </article>
                    </div>
                </div>
                <button onClick={handleConsultClick} className='my-10 font-bold text-white bg-[#cca352] p-4 shadow-xl hover:bg-[#ebbf67] duration-300'><a href="">Pedir más información</a></button>
            </section>
        </div>
    );
};

export default PlanInversorGold;