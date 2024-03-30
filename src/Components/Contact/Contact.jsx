import { useRef, useState } from 'react'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [data, setData] = useState({
    username: '',
    email: '',
    message: '',
    contactMethod: "",
    phone: ""
  })

  const refForm = useRef();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? (checked ? value : "") : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_8qedg9c'
    const templateId = 'template_ou5oj1t'
    const publicKey = '7JiPay6ta24HJe4oB'

    emailjs.sendForm(serviceId, templateId, refForm.current, publicKey)
      .then((result) => {
      Swal.fire({
        title: 'Su consulta se ha enviado con éxito',
        icon: 'success',
      })
      console.log(result.text);
      }, () => {
        Swal.fire({
          title: 'Error al enviar consulta',
          icon: 'error',
        })
      });
    setData({
      username: '',
      email: '',
      message: '',
      contactMethod: "",
      phone: ""
    })
}

  return (
    <div className='flex flex-col lg:flex-row justify-center lg:items-start items-center gap-10 lg:gap-20 py-28 bg-[#fbfbfb]' id='contact'>
      <section className='flex flex-col lg:items-start lg:justify-start justify-center items-center'>
        <article className='flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3'>
          <h2 className='lg:text-4xl text-3xl font-bold text-[#0830A6] text-center lg:text-start'>Consultá tus dudas</h2>
          <p className='text-[#f29494] font-bold border-[#f29494] border-b-2 text-sm pb-1 w-[8rem] text-center lg:text-start'>CONTACTO</p>
          <div className='pt-5 lg:flex flex-col gap-5 w-full hidden'>
              <article className='bg-white shadow-xl p-4 border-r-[2rem] rounded-tr-[5rem] border-[#f29494]'>
                <h3 className='text-xl font-bold text-[#0830A6]'>Correo electrónico</h3>
                <p className='font-medium text-gray-500 text-sm'>pizzolatoelizondo.seguros@gmail.com</p>
              </article>
              <article className='bg-white shadow-xl p-4 border-r-[2rem] rounded-tr-[5rem] border-[#f29494]'>
                <h3 className='text-xl font-bold text-[#0830A6]'>Celular</h3>
                <p className='font-medium text-gray-500 text-sm'>+542613674277</p>
              </article>
          </div>
        </article>
      </section>
      <section className='w-full lg:w-[35rem] px-10 lg:px-0'>
        <form ref={refForm} onSubmit={handleSubmit} className='lg:w-[35rem] w-full space-y-5'>
            <div className='flex flex-col gap-2'>
                <label className='font-bold text-[#0830A6]' htmlFor="username">Nombre *</label>
                <input 
                name='username'
                id="username"
                value={data.username}
                onChange={handleChange}
                type="text" placeholder='Ingresá tu nombre' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='font-bold text-[#0830A6]' htmlFor="email">Correo electrónico *</label>
                <input
                name='email'
                id="email"
                value={data.email}
                onChange={handleChange} 
                type="email" placeholder='Ingresá tu correo electrónico' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500'/>
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label className='font-bold text-[#0830A6]' htmlFor="phone">Celular *</label>
                <input
                  name='phone'
                  id="phone"
                  value={data.phone}
                  onChange={handleChange}
                  type="text" placeholder='Ingresá tu celular' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500' />
              </div>
            <div className='flex flex-col gap-2'>
                <label className='font-bold text-[#0830A6]' htmlFor="message">Consulta *</label>
                <textarea
                name='message'
                id="message"
                value={data.message}
                onChange={handleChange}  
                placeholder='Escribí tu consulta' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-bold text-[#0830A6]'>Prefiero ser contactado por:</label>
              <div className='flex gap-2'>
                <input
                  name='contactMethod'
                  id="whatsapp"
                  value="Whatsapp"
                  checked={data.contactMethod === "Whatsapp"}
                  onChange={handleChange}
                  type="checkbox" />
                <label className='text-sm font-semibold text-gray-700' htmlFor="whatsapp">Whatsapp</label>
              </div>
              <div className='flex gap-2'>
                <input
                  name='contactMethod'
                  id="email"
                  value="correo electrónico"
                  checked={data.contactMethod === "correo electrónico"}
                  onChange={handleChange}
                  type="checkbox" />
                <label className='text-sm font-semibold text-gray-700' htmlFor="email">Correo electrónico</label>
              </div>
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