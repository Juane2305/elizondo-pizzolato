import React from 'react'
import { useParams } from 'react-router-dom';
import empresas from '../empresas.json'

const DetailEmpresas = () => {

  const { target } = useParams(); 
  const empresaDetail = empresas.find(empresa => empresa.target === target);

  return (
    <div className='bg-[#f2f2f2]'>
      <div className='relative h-[30rem] z-20'>
        <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710808603/Pizzolato/kelly-sikkema-XXherw1ujoI-unsplash_omdnzx.jpg" alt="" className='h-full w-full object-cover brightness-[.35]'/>
        <h1 className='absolute bottom-10 left-10 text-white font-bold text-6xl'>Seguros para {empresaDetail.title.toLowerCase()}</h1>
        <p className='absolute bottom-5 left-10 text-white text-base'><a href="/" className='text-[#f29494] hover:text-[#0830A6] duration-300'>HOME</a>/<a href='/empresas' className='text-[#f29494] hover:text-[#0830A6] duration-300'>EMPRESAS</a>/{empresaDetail.title.toUpperCase()}</p>
      </div>
      <section className='flex flex-col justify-center items-center gap-5 pt-20 pb-10 relative z-10'>
        <h2 className='text-5xl font-bold text-[#0830A6] w-[70%] text-center'>{empresaDetail.description}</h2>
      </section>
      <section className='flex justify-center items-center gap-10 px-10 py-20'>
        <div className='h-[30rem] w-[50%] rounded-bl-[40rem] rounded-tl-[6rem] border-l-[1rem] border-[#F29494] relative z-10'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1711034612/0-2116_solicite-asesoramiento-profesional-familia-png_bdnlrb.png" alt="" className='w-full h-full object-cover rounded-bl-[25rem] rounded-tl-[5rem] object-right'/>
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
                  <label className='font-bold text-[#0830A6]' htmlFor="username">Correo electrónico *</label>
                  <input type="email" placeholder='Ingresá tu correo electrónico' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500'/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='font-bold text-[#0830A6]' htmlFor="">Seleccione el seguro *</label>
                <select name="" id="" className='w-full text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500 appearance-none cursor-pointer '>
                    {empresas.map(empresa =>(
                        <option key={empresa.id} value={empresa.title}>{empresa.title}</option>
                    ))}
                </select>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='font-bold text-[#0830A6]' htmlFor="username">Consulta *</label>
                <textarea placeholder='Escribí tu consulta' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500'/>
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

export default DetailEmpresas