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
          <p className='pt-3 text-sm opacity-60 font-medium lg:w-[80%] text-center lg:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est neque, commodo et magna in, dapibus egestas mauris. Nunc condimentum iaculis sapien quis ultrices.</p>
          <article className='flex flex-col gap-8 pt-3'>
            <div className='flex justify-start items-center gap-1'>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710458452/Pizzolato/shield-halved-solid_ykfq6d.svg" alt="" className='w-5'/>
              <p className='text-[#0830A6] text-sm font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quis iste quisquam</p>
            </div>
            <div className='flex justify-start items-center gap-1'>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710458452/Pizzolato/shield-halved-solid_ykfq6d.svg" alt="" className='w-5'/>
              <p className='text-[#0830A6] text-sm font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quis iste quisquam</p>
            </div>
            <div className='flex justify-start items-center gap-1'>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710458452/Pizzolato/shield-halved-solid_ykfq6d.svg" alt="" className='w-5'/>
              <p className='text-[#0830A6] text-sm font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quis iste quisquam</p>
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