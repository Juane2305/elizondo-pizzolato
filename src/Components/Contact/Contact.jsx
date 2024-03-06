import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center items-center space-x-52 pb-20'>
      <section className='space-y-16'>
        <article>
            <h2 className='text-6xl font-fairplay text-blue-950'>Contact Us</h2>
        </article>
        <article className='space-y-10'>
            <div>
                <h3 className='text-xl font-semibold text-blue-950'>Correo Electrónico</h3>
                <span className='opacity-70'>correo@yahoo.com</span>
            </div>
            <div>
                <h3 className='text-xl font-semibold text-blue-950'>Celular</h3>
                <span className='opacity-70'>+542612404253</span>
            </div>
        </article>
      </section>
      <section className='pt-10'>
        <form className=' w-[35rem] space-y-5'>
            <div className='flex flex-col'>
                <label htmlFor="username">Nombre *</label>
                <input type="text" placeholder='Tu nombre' className='border-gray-500 border border-opacity-60 p-3'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="username">Correo electrónico *</label>
                <input type="text" placeholder='Tu nombre'  className='border-gray-500 border border-opacity-60 p-3'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="username">Consulta *</label>
                <textarea placeholder='Tu nombre'  className='border-gray-500 border border-opacity-60 p-3 h-[8rem]'/>
            </div>
            <button type='submit' className='hover:border-4 border-blue-950 px-5 py-3 bg-blue-900 text-white hover:bg-transparent hover:text-black'>
                Enviar
            </button>
        </form>
      </section>
    </div>
  )
}

export default Contact
