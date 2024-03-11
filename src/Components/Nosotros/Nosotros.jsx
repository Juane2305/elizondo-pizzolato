import React from 'react';
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GoGoal } from "react-icons/go";
import { IoBriefcaseOutline } from "react-icons/io5";

const Nosotros = () => {
    return (
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex justify-center items-center">
            <div className="border-t-2 border-blue-950 w-[20%] animate-pulse duration-2000"></div>
          </div>
          <h2 className=" text-center text-blue-950 text-5xl font-fairplay mt-16">
            Sobre Nosotros
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-center pt-20 space-y-20 lg:space-y-0 lg:space-x-20 lg:px-[2rem] xl:px-[8rem]">
            <div className="flex flex-col items-center justify-center">
              <HiOutlineUserGroup className='size-12'/>
              <h3 className="text-2xl text-center pb-5 font-fairplay font-semibold">
                ¿Quiénes somos?
              </h3>
              <p className="font-light text-center px-5 sm:px-32 lg:px-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                repudiandae nesciunt eaque placeat, excepturi distinctio soluta
                asperiores blanditiis recusandae quae porro amet nemo delectus.
                Similique sapiente magnam quae saepe laborum.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <GoGoal  className='size-12'/>
              <h3 className="text-2xl text-center pb-5 font-fairplay font-semibold">
                Misión
              </h3>
              <p className="font-light text-center px-5 sm:px-32 lg:px-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                repudiandae nesciunt eaque placeat, excepturi distinctio soluta
                asperiores blanditiis recusandae quae porro amet nemo delectus.
                Similique sapiente magnam quae saepe laborum.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <IoBriefcaseOutline className='size-12'/>
              <h3 className="text-2xl text-center pb-5 font-fairplay font-semibold">
                Experiencia
              </h3>
              <p className="font-light text-center px-5 sm:px-32 lg:px-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                repudiandae nesciunt eaque placeat, excepturi distinctio soluta
                asperiores blanditiis recusandae quae porro amet nemo delectus.
                Similique sapiente magnam quae saepe laborum.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center pt-32'>
                <div className="border-t-2 border-blue-950 w-[20%] my-16 animate-pulse duration-2000"></div>
            </div>
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