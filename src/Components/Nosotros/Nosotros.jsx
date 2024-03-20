import React from 'react';
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GoGoal } from "react-icons/go";
import { IoBriefcaseOutline } from "react-icons/io5";

const Nosotros = () => {
    return (
      <div className='flex justify-center items-start gap-10 px-20 py-10'>
        <section className='w-1/2 flex flex-col gap-3'>
          <h2 className='text-4xl font-bold text-[#0830A6]'>Nos centramos en el beneficio del cliente</h2>
          <p className='text-[#f29494] font-bold border-[#f29494] border-b-2 text-sm pb-1 w-[8rem]'>SEGUROS</p>
          <p className='pt-3 text-sm opacity-60 font-medium w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est neque, commodo et magna in, dapibus egestas mauris. Nunc condimentum iaculis sapien quis ultrices.</p>
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
        <section  className='w-1/2 relative'>
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710457786/Pizzolato/Seguros-19_lozatf.webp" alt="" className='shadow-xl rounded-tl-[6rem]'/>
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710459454/Pizzolato/Rectangle_5_1_wolcxp.svg" alt="" className='absolute -bottom-8 right-0 -z-10 animate-pulse'/>
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710459950/Pizzolato/asset_2_o8fnn4.svg" alt="" className='absolute -top-10 -right-10 -z-10 animate-pulse w-28'/>
        </section>
      </div>
    );
};

export default Nosotros;
{/* <div className='w-full flex justify-center items-center'>
        <div className="border-t-2 border-blue-950 w-[20%] my-16 animate-pulse duration-2000"></div>
    </div>
    <div className='flex flex-col items-center justify-center'>
        <h2 className='text-6xl font-fairplay text-center'>Sobre Nosotros</h2>
        <p className='text-center pt-16 w-[70%] lg:w-[40%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis repudiandae est explicabo, reprehenderit laborum ex aut cumque tempore inventore nulla possimus odio amet atque molestiae nesciunt accusamus natus ipsum adipisci.</p>
    </div>
    <div className='w-full flex justify-center items-center'>
        <div className="border-t-2 border-blue-950 w-[20%] my-16 animate-pulse duration-2000"></div>
    </div> */}