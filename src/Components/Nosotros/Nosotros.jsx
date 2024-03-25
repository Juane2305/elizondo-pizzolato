import React from 'react';
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GoGoal } from "react-icons/go";
import { IoBriefcaseOutline } from "react-icons/io5";

const Nosotros = () => {
    return (
      <div className='lg:flex lg:flex-row flex flex-col justify-center items-center lg:items-start gap-20 lg:gap-10 px-10 lg:px-20 pb-10'>
        <section className='lg:w-1/2 flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3'>
          <h2 className='text-3xl text-center lg:text-start lg:text-4xl font-bold text-[#0830A6]'>Nos centramos en el beneficio del cliente</h2>
          <p className='text-[#f29494] text-center lg:text-start font-bold border-[#f29494] border-b-2 text-sm pb-1 w-[8rem]'>SEGUROS</p>
          <p className='pt-3 text-sm opacity-70 font-medium lg:w-[80%] text-center lg:text-start'>En 'Elizondo Pizzolato', con más de 25 años de experiencia en la industria de seguros, nos comprometemos a ofrecer soluciones confiables y personalizadas para cubrir tus necesidades. Nuestra larga trayectoria en el mercado nos respalda como expertos en la protección patrimonial y personal. Con un enfoque centrado en el cliente, buscamos establecer relaciones duraderas y brindar tranquilidad en cada póliza.</p>
          <article className='flex flex-col gap-8 pt-3'>
            <div className='flex justify-start items-center gap-1'>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710458452/Pizzolato/shield-halved-solid_ykfq6d.svg" alt="" className='w-5'/>
              <p className='text-[#0830A6] text-sm font-bold'>Experiencia y Trayectoria.</p>
            </div>
            <div className='flex justify-start items-center gap-1'>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710458452/Pizzolato/shield-halved-solid_ykfq6d.svg" alt="" className='w-5'/>
              <p className='text-[#0830A6] text-sm font-bold'>Personalización y Atención al Cliente.</p>
            </div>
            <div className='flex justify-start items-center gap-1'>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710458452/Pizzolato/shield-halved-solid_ykfq6d.svg" alt="" className='w-5'/>
              <p className='text-[#0830A6] text-sm font-bold'>Compromiso con la Calidad y la Confianza.</p>
            </div>
          </article>
        </section>
        <section  className='lg:w-1/2 relative'>
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710457786/Pizzolato/Seguros-19_lozatf.webp" alt="" className='shadow-xl rounded-tl-[6rem]'/>
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710459454/Pizzolato/Rectangle_5_1_wolcxp.svg" alt="" className='absolute -bottom-8 right-0 -z-10 animate-pulse w-[15rem] lg:w-full'/>
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710459950/Pizzolato/asset_2_o8fnn4.svg" alt="" className='absolute -top-10 lg:-right-10 -right-5 -z-10 animate-pulse lg:w-28 w-20'/>
        </section>
      </div>
    );
};

export default Nosotros;