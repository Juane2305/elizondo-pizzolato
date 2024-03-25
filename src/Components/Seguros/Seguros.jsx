import React from 'react'
import { Link } from 'react-router-dom'

const Seguros = () => {
  return (
        <div id='seguros' className='w-full flex flex-col justify-center items-center gap-3 lg:pt-28 lg:pb-28 pt-20 pb-10 px-10 2xl:px-20'>
            <h2 className='text-center text-3xl lg:text-4xl font-bold text-[#0830A6]'>Contratá tu seguro</h2>
            <p className='text-[#f29494] font-bold border-[#f29494] border-b-2 pb-1 w-[8rem] text-center text-sm'>SEGUROS</p>
            <section className='py-10 lg:flex lg:flex-row flex flex-col justify-center items-center gap-10'>
                <article className='bg-white w-full flex flex-col gap-4 group rounded-tr-[6rem] hover:shadow-xl duration-500'>
                    <div className='relative'>
                        <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710384429/Pizzolato/jessica-rockowitz-6c4Uhhe68yQ-unsplash_dtwlcw.jpg" alt="" className='w-full h-[20rem] object-cover rounded-tr-[6rem] rounded-bl-[50%]'/>
                        <div className='w-[5rem] h-[5rem] absolute bottom-0 left-5 z-10 bg-[#0830A6] border-[6px] border-white p-4 rounded-full flex justify-center items-center group-hover:border-[#f29494] duration-500'>
                            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710385240/Pizzolato/user-shield-solid_1_qpwgp4.svg" alt="" className='w-full h-full'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 px-5 pb-5'>
                        <h2 className='text-2xl font-bold text-[#0830A6]'>Seguro para personas</h2>
                        <p className='text-xs opacity-60 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolor dolorum similique est! Tempore iste ratione voluptatem voluptatibus dicta sapiente minima veniam quaerat, architect</p>
                        <Link to="/personas" className='mt-2 border-2 w-max p-2 border-[#f29494] text-sm font-bold text-[#0830A6] hover:border-b-2 hover:border-r-white hover:border-t-white hover:border-l-white duration-500 hover:rounded-b-xl hover:text-[#f29494]'>
                            Ver más
                        </Link>
                    </div>
                </article>
                <article className='bg-white w-full flex flex-col gap-4 group rounded-tr-[6rem] hover:shadow-xl duration-500'>
                    <div className='relative'>
                        <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710384531/Pizzolato/krakenimages-376KN_ISplE-unsplash_cfjtq3.jpg" alt="" className='w-full h-[20rem] object-cover rounded-tr-[6rem] rounded-bl-[50%]'/>
                        <div className='w-[5rem] h-[5rem] absolute bottom-0 left-5 z-10 bg-[#0830A6] border-[6px] border-white p-4 rounded-full flex justify-center items-center group-hover:border-[#f29494] duration-500'>
                            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710385246/Pizzolato/building-shield-solid_1_rmhuad.svg" alt="" className='w-full h-full'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 px-5 pb-5'>
                        <h2 className='text-2xl font-bold text-[#0830A6]'>Seguro para empresas</h2>
                        <p className='text-xs opacity-60 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolor dolorum similique est! Tempore iste ratione voluptatem voluptatibus dicta sapiente minima veniam quaerat, architect</p>
                        <Link to="/empresas" className='mt-2 border-2 w-max p-2 border-[#f29494] text-sm font-bold text-[#0830A6] hover:border-b-2 hover:border-r-white hover:border-t-white hover:border-l-white duration-500 hover:rounded-b-xl hover:text-[#f29494]'>
                            Ver más
                        </Link>
                    </div>
                </article>
                <article className='bg-white w-full flex flex-col gap-4 group rounded-tr-[6rem] hover:shadow-xl duration-500'>
                    <div className='relative'>
                        <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710389768/Pizzolato/andre-taissin-5OUMf1Mr5pU-unsplash_tdmoma.jpg" alt="" className='w-full h-[20rem] object-cover rounded-tr-[6rem] rounded-bl-[50%]'/>
                        <div className='w-[5rem] h-[5rem] absolute bottom-0 left-5 z-10 bg-[#0830A6] border-[6px] border-white p-4 rounded-full flex justify-center items-center group-hover:border-[#f29494] duration-500'>
                            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710385713/Pizzolato/piggy-bank-solid_quhvdw.svg" alt="" className='w-full h-full'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 px-5 pb-5'>
                        <h2 className='text-2xl font-bold text-[#0830A6]'>Seguro de retiro</h2>
                        <p className='text-xs opacity-60 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolor dolorum similique est! Tempore iste ratione voluptatem voluptatibus dicta sapiente minima veniam quaerat, architect</p>
                        <Link to="/retiro" className='mt-2 border-2 w-max p-2 border-[#f29494] text-sm font-bold text-[#0830A6] hover:border-b-2 hover:border-r-white hover:border-t-white hover:border-l-white duration-500 hover:rounded-b-xl hover:text-[#f29494]'>
                            Ver más
                        </Link>
                    </div>
                </article>
            </section>
        </div>
  )
}

export default Seguros