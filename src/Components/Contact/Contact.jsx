import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center lg:items-start items-center gap-10 lg:gap-20 py-28 bg-[#fbfbfb]'>
      <section className='flex flex-col lg:items-start lg:justify-start justify-center items-center'>
        <article className='flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3'>
          <h2 className='lg:text-4xl text-3xl font-bold text-[#0830A6] text-center lg:text-start'>Consultá tus dudas</h2>
          <p className='text-[#f29494] font-bold border-[#f29494] border-b-2 text-sm pb-1 w-[8rem] text-center lg:text-start'>CONTACTO</p>
          <div className='pt-5 lg:flex flex-col gap-5 w-full hidden'>
              <article className='bg-white shadow-xl p-4 border-r-[2rem] rounded-tr-[5rem] border-[#f29494]'>
                <h3 className='text-xl font-bold text-[#0830A6]'>Correo electrónico</h3>
                <p className='font-medium text-gray-500 text-sm'>helvio.elizondo@yahoo.com.ar</p>
              </article>
              <article className='bg-white shadow-xl p-4 border-r-[2rem] rounded-tr-[5rem] border-[#f29494]'>
                <h3 className='text-xl font-bold text-[#0830A6]'>Celular</h3>
                <p className='font-medium text-gray-500 text-sm'>+542613677606</p>
              </article>
          </div>
        </article>
      </section>
      <section className='w-full lg:w-[35rem] px-10 lg:px-0'>
        <form className='lg:w-[35rem] w-full space-y-5'>
            <div className='flex flex-col gap-2'>
                <label className='font-bold text-[#0830A6]' htmlFor="username">Nombre *</label>
                <input type="text" placeholder='Ingresá tu nombre' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='font-bold text-[#0830A6]' htmlFor="username">Correo electrónico *</label>
                <input type="email" placeholder='Ingresá tu correo electrónico' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='font-bold text-[#0830A6]' htmlFor="username">Consulta *</label>
                <textarea placeholder='Escribí tu consulta' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500'/>
            </div>
            <button type='submit' className='w-full bg-[#0830A6] p-4 text-white font-bold border-4 border-[#0830A6] hover:bg-transparent hover:border-[#F29494] hover:text-[#F29494] duration-500'>
                Enviar
            </button>
        </form>
      </section>
    </div>
  )
}

export default Contact
