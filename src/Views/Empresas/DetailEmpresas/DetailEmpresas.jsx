import React, { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import empresas from '../empresas.json'
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const DetailEmpresas = () => {

  const { target } = useParams(); 
  const empresaDetail = empresas.find(empresa => empresa.target === target);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: "",
    select: "",
    message: "",
    contactMethod: "", 
  });

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

    const serviceId = 'service_b5zdp5x';
    const templateId = 'template_25a36pj';
    const publicKey = 'm4YSzPPXK8b8NlFwv';

    emailjs.sendForm(serviceId, templateId, refForm.current, publicKey)
      .then((result) => {
        Swal.fire({
          title: 'Su consulta se ha enviado con éxito',
          icon: 'success',
        });
        console.log(result.text);
      }, () => {
        Swal.fire({
          title: 'Error al enviar consulta',
          icon: 'error',
        });
      });

    setData({
      username: '',
      email: '',
      phone: "",
      select: "",
      message: "",
      contactMethod: "", 
    });
  };

  return (
    <div className='bg-[#f2f2f2]'>
      <div className='relative h-[30rem] z-20'>
        <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710808603/Pizzolato/kelly-sikkema-XXherw1ujoI-unsplash_omdnzx.jpg" alt="" className='h-full w-full object-cover brightness-[.35]'/>
        <h1 className='absolute bottom-16 left-5 lg:left-10 text-white font-bold text-4xl lg:text-6xl'>{empresaDetail.title}</h1>
        <p className='absolute bottom-5 left-5 lg:left-10 text-white lg:text-xl'><Link to="/" className='text-[#f29494] hover:text-white duration-300'>HOME</Link>/<Link to='/empresas' className='text-[#f29494] hover:text-white duration-300'>EMPRESAS</Link>/{empresaDetail.title.toUpperCase()}</p>
      </div>
      <section className='flex flex-col justify-center items-center gap-5 py-10 bg-[#f29494] shadow-xl relative z-10'>
        <h2 className='lg:text-4xl font-bold text-white lg:w-[70%] px-5 lg:px-0 text-3xl text-center'>{empresaDetail.description}</h2>
      </section>
      <section className='flex justify-center text-center py-10 w-full '>
        <p className='w-[90%] md:w-[80%] leading-relaxed opacity-80 text-lg'>{empresaDetail.text}</p>
      </section>
      <section className='flex justify-center items-center gap-10 px-10 pb-10 lg:py-20'>
        <div className='hidden lg:block h-[30rem]  w-[50%] rounded-bl-[40rem] rounded-tl-[6rem] border-l-[1rem] border-[#F29494] relative z-10'>
                <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1711604077/0-2116_solicite-asesoramiento-profesional-familia-png_bdnlrb_upscayl_2x_realesrgan-x4plus_mis5r4.png" alt="" className='w-full h-full object-cover rounded-bl-[25rem] rounded-tl-[5rem] object-right'/>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710816213/Pizzolato/Vector_1_scvdbk.svg" alt="" className='absolute top-0 right-20 -z-10 w-[20rem] animate-pulse'/>
        </div>
        <div className='lg:w-[50%] pt-10 flex flex-col gap-3'>
          <form ref={refForm} onSubmit={handleSubmit} className='lg:w-[35rem] flex flex-col gap-5'>
            <h2 className='text-[#0830A6] font-bold text-2xl text-center lg:text-start'>Cotizá gratis con nosotros</h2>
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
                <label className='font-bold text-[#0830A6]' htmlFor="">Seleccione el seguro *</label>
                <select 
                    name="select" 
                    value={data.select} 
                    onChange={handleChange} 
                    className='w-full text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500 appearance-none cursor-pointer '
                >
                    {empresas.map(empresa => (
                        <option key={empresa.id} value={empresa.title}>{empresa.title}</option>
                    ))}
                </select>
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
        </div>
      </section>
    </div>
  )
}

export default DetailEmpresas