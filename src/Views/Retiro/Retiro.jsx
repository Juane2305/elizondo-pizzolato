import React from 'react'
import { MdOutlineSavings } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaRegCircleDot } from "react-icons/fa6";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";

const Profesionales = () => {

  return (
    <div className='bg-[#f2f2f2]'>
      <div className='relative h-[30rem]'>
        <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710808603/Pizzolato/kelly-sikkema-XXherw1ujoI-unsplash_omdnzx.jpg" alt="" className='h-full w-full object-cover brightness-[.35]'/>
        <h1 className='absolute bottom-10 left-10 text-white font-bold text-6xl'>Seguros de retiro</h1>
        <p className='absolute bottom-5 left-10 text-white text-xl'><a href="/" className='text-[#f29494] hover:text-[#0830A6] duration-300'>HOME</a>/RETIRO</p>
      </div>
      <section className='flex flex-col justify-center items-center gap-5 py-20'>
        <h2 className='text-5xl font-bold text-[#0830A6]'>Tenés un futuro asegurado</h2>
        <p className='w-[60%] text-center text-gray-500 font-medium'>
              Un <span className='text-[#0830A6]'>seguro de retiro</span> es un fondo que podés ir acumulando según tus posibilidades de ahorro. Lo construís con contribuciones periódicas y se <span className='text-[#0830A6]'>incrementa mensualmente</span> con las <span className='text-[#0830A6]'>rentabilidades</span> que obtenemos <span className='text-[#0830A6]'>para vos</span>.
        </p>
      </section>
      <section className='flex justify-center items-start gap-10 px-20 py-10'>
        <article className='w-1/2 flex flex-col gap-10'>
            <h2 className='text-5xl font-bold text-[#0830A6]'>¿Por qué hacer un seguro de retiro?</h2>
            <div className='flex flex-col gap-5'>
              <div className='flex justify-start items-center gap-2'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710769997/Pizzolato/circle-check-solid_x4owlc.svg" alt="" className='w-5'/>
                <p className='text-[#0830A6] text-sm font-bold'>Deducción anual en impuestos a las ganancias.</p>
              </div>
              <div className='flex justify-start items-center gap-2'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710769997/Pizzolato/circle-check-solid_x4owlc.svg" alt="" className='w-5'/>
                <p className='text-[#0830A6] text-sm font-bold'>Capital garantizado por ley.</p>
              </div>
              <div className='flex justify-start items-center gap-2'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710769997/Pizzolato/circle-check-solid_x4owlc.svg" alt="" className='w-5'/>
                <p className='text-[#0830A6] text-sm font-bold'>Flexibilidad en el monto de tus aportes.</p>
              </div>
              <div className='flex justify-start items-center gap-2'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710769997/Pizzolato/circle-check-solid_x4owlc.svg" alt="" className='w-5'/>
                <p className='text-[#0830A6] text-sm font-bold'>Forma simple de capitalizarte sin conocimientos de inversión.</p>
              </div>
              <div className='flex justify-start items-center gap-2'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710769997/Pizzolato/circle-check-solid_x4owlc.svg" alt="" className='w-5'/>
                <p className='text-[#0830A6] text-sm font-bold'>Alta rentabilidad, invirtiendo con especialistas.</p>
              </div>
              <div className='flex justify-start items-center gap-2'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710769997/Pizzolato/circle-check-solid_x4owlc.svg" alt="" className='w-5'/>
                <p className='text-[#0830A6] text-sm font-bold'>Disposición de tu dinero en cualquier momento.</p>
              </div>
            </div>
        </article>
        <article  className='w-1/2 relative'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710769868/Pizzolato/abuelos-conviviendo-con-nietos-gettyimages_evijnl.jpg" alt="" className='shadow-xl rounded-tl-[6rem] h-full'/>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710770589/Pizzolato/Rectangle_5_3_ttjdnl.svg" alt="" className='absolute -bottom-8 right-0 -z-10 animate-pulse'/>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710770485/Pizzolato/asset_4_kfeblu.svg" alt="" className='absolute -top-10 -right-10 -z-10 animate-pulse w-28'/>
        </article>
      </section>
      <section className='flex flex-col justify-center items-center gap-10 py-10'>
        <h2 className='text-5xl font-bold text-[#0830A6]'>Planes ofrecidos</h2>
        <div className='flex justify-center items-center gap-10'>
          <article className='flex flex-col justify-start items-center gap-4 p-8 bg-white shadow-xl w-[25rem] border-t-8 rounded-tl-[6rem] border-t-green-700 h-[20rem]'>
            <div className='flex flex-col justify-center items-center gap-4 border-b-2 pb-4 border-green-500'>
              <h2 className='text-3xl font-bold text-green-700'>Plan Futuro</h2>
              <p className='text-gray-500 text-center text-sm font-bold h-[5rem]'>Con Plan Futuro podes preservar tu estándar de vida al jubilarte, una opción de ahorro efectiva y diferente a los métodos convencionales</p>
            </div>
            <Link to="/retiro/plan-futuro" className='font-bold text-white bg-green-700 p-4 my-4 shadow-xl hover:bg-green-400 duration-300'>Más información</Link>
          </article>

          <article className='flex flex-col justify-start items-center gap-4 p-8 bg-white shadow-xl w-[25rem] border-t-8 border-t-orange-600 h-[20rem]'>
            <div className='flex flex-col justify-center items-center gap-4 border-b-2 pb-4 border-orange-500'>
              <h2 className='text-3xl font-bold text-orange-600'>Plan Proyecto</h2>
              <p className='text-gray-500 text-center text-sm font-bold h-[5rem]'>¿Cómo puedo planificar mis ahorros para concretar mis sueños?</p>
            </div>
            <Link to="/retiro/plan-proyecto" className='font-bold text-white bg-orange-600 p-4 my-4 shadow-xl hover:bg-orange-400 duration-300'>Más información</Link>
          </article>

          <article className='flex flex-col justify-start items-center gap-4 p-8 bg-white shadow-xl w-[25rem] border-t-8 rounded-tr-[6rem] border-t-yellow-600 h-[20rem]'>
            <div className='flex flex-col justify-center items-center gap-4 border-b-2 pb-4 border-yellow-500'>
              <h2 className='text-3xl font-bold text-yellow-600'>Plan Inversor Gold</h2>
              <p className='text-gray-500 text-center text-sm font-bold h-[5rem]'>¿Cómo puedo maximizar el rendimiento de mis inversiones?</p>
            </div>
            <Link to="/retiro/plan-inversor-gold" className='font-bold text-white bg-yellow-600 p-4 my-4 shadow-xl hover:bg-yellow-500 duration-300'>Más información</Link>
          </article>

        </div>
      </section>
    </div>
  )
}

export default Profesionales
