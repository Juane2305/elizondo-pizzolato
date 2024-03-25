import { useParams } from 'react-router-dom';
import automotores from '../automotores.json'
import { FaCarCrash } from "react-icons/fa";
import { Tb24Hours } from "react-icons/tb";
import { BsPersonFillCheck } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { useEffect } from 'react';

const DetailAutomotores = () => {

  useEffect(() => {
    // Scroll hacia arriba cuando se monta el componente
    window.scrollTo(0, 0);
  }, []);

  const { target } = useParams(); 
  const automotoresDetail = automotores.find(automotor => automotor.target === target);
  console.log(automotoresDetail);

  return (
    <div className='bg-[#f2f2f2]'>
      <div className='relative h-[30rem] z-20'>
        <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710808603/Pizzolato/kelly-sikkema-XXherw1ujoI-unsplash_omdnzx.jpg" alt="" className='h-full w-full object-cover brightness-[.35]'/>
        <h1 className='absolute bottom-10 left-10 text-white font-bold text-6xl  cursor-default'>Seguros para {automotoresDetail.target}</h1>
        <p className='absolute bottom-5 left-10 text-white text-base  cursor-default'><a href="/" className='text-[#f29494] hover:text-[#0830A6] duration-300'>HOME</a>/<a href='/personas' className='text-[#f29494] hover:text-[#0830A6] duration-300'>PERSONAS</a>/{automotoresDetail.title.toUpperCase()}</p>
      </div>
      <section className='flex flex-col justify-center items-center gap-5 pt-20 pb-10 relative z-10  cursor-default'>
        <h2 className='text-5xl font-bold text-[#0830A6] w-[70%] text-center'>{automotoresDetail.description}</h2>
        <p className='w-[60%] text-center text-gray-500 font-medium'>
        ¡Protegé tu camino! Aseguramos tu <span className='text-[#0830A6]'>vehículo</span> para brindarte la <span className='text-[#0830A6]'>tranquilidad</span> que merecés al conducir
        </p>
      </section>
      <section className='flex justify-center items-center flex-wrap gap-5 px-20 bg-gradient-to-tr from-[#f4a1a1] to-[#f29494] py-5'>
        <article className='flex justify-center items-start gap-2 w-[20rem] h-[10rem] bg-white p-5 shadow-xl  cursor-default'>
          <div className='bg-white text-[#0830A6] p-2 flex justify-center items-center shadow-md border-4 border-[#f29494] rounded-3xl rounded-bl-3xl'>
            <FaCarCrash className='text-2xl'/>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[#0830A6] font-bold text-base'>Cobertura integral</h3>
            <p className='text-xs text-gray-500 font-medium'>Ofrecemos una amplia gama de coberturas que incluyen protección contra accidentes, robo, daños materiales y responsabilidad civil.</p>
          </div>
        </article>
        <article className='flex justify-center items-start gap-2 w-[20rem] h-[10rem] bg-white p-5 shadow-xl'>
          <div className='bg-white text-[#0830A6] p-2 flex justify-center items-center shadow-md border-4 border-[#f29494] rounded-3xl rounded-bl-3xl'>
            <Tb24Hours className='text-2xl'/>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[#0830A6] font-bold text-base'>Asistencia las 24hs</h3>
            <p className='text-xs text-gray-500 font-medium'>Estamos contigo en cada kilómetro brindando apoyo en situaciones de emergencia.</p>
          </div>
        </article>
        <article className='flex justify-center items-start gap-2 w-[20rem] h-[10rem] bg-white p-5 shadow-xl cursor-default'>
          <div className='bg-white text-[#0830A6] p-2 flex justify-center items-center shadow-md border-4 border-[#f29494] rounded-3xl rounded-bl-3xl'>
            <BsPersonFillCheck className='text-2xl'/>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[#0830A6] font-bold text-base'>Atención personalizada</h3>
            <p className='text-xs text-gray-500 font-medium'>Te asesoramos para encontrar la póliza perfecta para tus necesidades. Cada conductor es único y tu seguro también debería serlo.</p>
          </div>
        </article>
        <article className='flex justify-center items-start gap-2 w-[20rem] h-[10rem] bg-white p-5 shadow-xl'>
          <div className='bg-white text-[#0830A6] p-2 flex justify-center items-center shadow-md border-4 border-[#f29494] rounded-3xl rounded-bl-3xl'>
            <TbDiscount2 className='text-2xl'/>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[#0830A6] font-bold text-base'>Descuentos exclusivos</h3>
            <p className='text-xs text-gray-500 font-medium'>Bonificaciones especiales por baja siniestralidad.</p>
          </div>
        </article>
        <article className='flex justify-center items-start gap-2 w-[20rem] h-[10rem] bg-white p-5 shadow-xl'>
          <div className='bg-white text-[#0830A6] p-2 flex justify-center items-center shadow-md border-4 border-[#f29494] rounded-3xl rounded-bl-3xl'>
            <FaBuildingCircleCheck className='text-2xl'/>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[#0830A6] font-bold text-base'>Compañía de primera línea</h3>
            <p className='text-xs text-gray-500 font-medium'>Amplia trayectoria, respaldo y confiabilidad, para que tu patrimonio esté resguardado.</p>
          </div>
        </article>
      </section>
      <section className='flex justify-center items-center gap-10 px-10 py-20  cursor-default'>
        <div className='h-[30rem] w-[50%] rounded-bl-[40rem] rounded-tl-[6rem] border-l-[1rem] border-[#F29494] relative z-10'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710807699/Pizzolato/fondo-familia-feliz_ul4eh6.png" alt="" className='w-full h-full object-cover rounded-bl-[25rem] rounded-tl-[5rem]'/>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710816213/Pizzolato/Vector_1_scvdbk.svg" alt="" className='absolute top-0 right-20 -z-10 w-[20rem] animate-pulse'/>
        </div>
        <div className='w-[50%] flex flex-col gap-3'>
          <form className='lg:w-[35rem] space-y-7'>
            <h2 className='text-[#0830A6] font-bold text-2xl'>Cotizá gratis con nosotros</h2>
            <div className='flex justify-between items-center gap-5'>
              <div className='flex flex-col gap-2 w-full'>
                  <label className='font-bold text-[#0830A6]' htmlFor="username">Nombre *</label>
                  <input type="text" placeholder='Ingresá tu nombre' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500'/>
              </div>
              <div className='flex flex-col gap-2 w-full'>
                  <label className='font-bold text-[#0830A6]' htmlFor="username">Celular *</label>
                  <input type="email" placeholder='Ingresá tu celular' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500'/>
                </div>
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label className='font-bold text-[#0830A6]' htmlFor="username">Correo electrónico *</label>
                <input type="email" placeholder='Ingresá tu correo electrónico' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500'/>
            </div>
              <div className='flex flex-col gap-2'>
                  <label className='font-bold text-[#0830A6]' htmlFor="username">Marca *</label>
                  <input type="text" placeholder='Ingresá la marca de tu vehículo' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500'/>
              </div>
              <div className='flex flex-col gap-2'>
                  <label className='font-bold text-[#0830A6]' htmlFor="username">Modelo *</label>
                  <input type="text" placeholder='Ingresá el modelo de tu vehículo' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500'/>
              </div>
              <div className='flex flex-col gap-2'>
                  <label className='font-bold text-[#0830A6]' htmlFor="username">Año *</label>
                  <input type="text" placeholder='Ingresá el año de tu vehículo' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500'/>
              </div>
              <button type='submit' className='w-full bg-[#0830A6] p-4 text-white font-bold border-4 border-[#0830A6] hover:bg-transparent hover:border-[#F29494] hover:text-[#F29494] duration-500'>
                  Enviar
              </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default DetailAutomotores