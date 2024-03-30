import { Link, useParams } from 'react-router-dom';
import automotores from '../automotores.json'
import { FaCarCrash } from "react-icons/fa";
import { Tb24Hours } from "react-icons/tb";
import { BsPersonFillCheck } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const DetailAutomotores = () => {

  useEffect(() => {
    // Scroll hacia arriba cuando se monta el componente
    window.scrollTo(0, 0);
  }, []);

  const { target } = useParams(); 
  const automotoresDetail = automotores.find(automotor => automotor.target === target);
 
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: "",
    marca: "",
    modelo: "",
    year: "",
    contactMethod: "", // This will hold the selected contact method
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

    const serviceId = 'service_8qedg9c';
    const templateId = 'template_jnpvqm3';
    const publicKey = '7JiPay6ta24HJe4oB';

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
      marca: "",
      modelo: "",
      year: "",
      contactMethod: "", // Reset selected contact method after submission
    });
  };

  return (
    <div className='bg-[#f2f2f2]'>
      <div className='relative h-[30rem] z-20'>
        <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710808603/Pizzolato/kelly-sikkema-XXherw1ujoI-unsplash_omdnzx.jpg" alt="" className='h-full w-full object-cover brightness-[.35]'/>
        <h1 className='absolute bottom-16 left-5 lg:left-10 text-white font-bold text-4xl lg:text-6xl'>Seguros para {automotoresDetail.target}</h1>
        <p className='absolute bottom-5 left-5 lg:left-10 text-white lg:text-xl'><Link to="/" className='text-[#f29494] hover:text-white duration-300'>HOME</Link>/<Link to='/personas' className='text-[#f29494] hover:text-white duration-300'>PERSONAS</Link>/{automotoresDetail.title.toUpperCase()}</p>
      </div>
      <section className='flex flex-col justify-center items-center gap-5 pt-20 pb-10 relative z-10  cursor-default'>
        <h2 className='lg:text-5xl font-bold text-[#0830A6] lg:w-[70%] px-5 text-3xl text-center'>{automotoresDetail.description}</h2>
        <p className='px-5 lg:px-0 lg:w-[60%] text-center text-gray-500 font-medium'>
        Optimizá la protección de tu {automotoresDetail.nombre} con <span className='text-[#0830A6] opacity-70'>asesoramiento personalizado</span> de expertos en las principales compañías del mercado automotriz.
        </p>
      </section>
      <section className='flex justify-center items-center flex-wrap gap-5 px-20 bg-gradient-to-tr from-[#f4a1a1] to-[#f29494] py-5'>
        <article className='flex justify-center items-start gap-2 w-[20rem] h-[12rem] lg:h-[10rem] bg-white p-5 shadow-xl  cursor-default'>
          <div className='bg-white text-[#0830A6] p-2 flex justify-center items-center shadow-md border-4 border-[#f29494] rounded-3xl rounded-bl-3xl'>
            <FaCarCrash className='text-2xl'/>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[#0830A6] font-bold text-base'>Cobertura integral</h3>
            <p className='text-xs text-gray-500 font-medium'>Ofrecemos una amplia gama de coberturas que incluyen protección contra accidentes, robo, daños materiales y responsabilidad civil.</p>
          </div>
        </article>
        <article className='flex justify-center items-start gap-2 w-[20rem] h-[12rem] lg:h-[10rem] bg-white p-5 shadow-xl'>
          <div className='bg-white text-[#0830A6] p-2 flex justify-center items-center shadow-md border-4 border-[#f29494] rounded-3xl rounded-bl-3xl'>
            <Tb24Hours className='text-2xl'/>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[#0830A6] font-bold text-base'>Asistencia las 24hs</h3>
            <p className='text-xs text-gray-500 font-medium'>Estamos contigo en cada kilómetro brindando apoyo en situaciones de emergencia.</p>
          </div>
        </article>
        <article className='flex justify-center items-start gap-2 w-[20rem] h-[12rem] lg:h-[10rem] bg-white p-5 shadow-xl cursor-default'>
          <div className='bg-white text-[#0830A6] p-2 flex justify-center items-center shadow-md border-4 border-[#f29494] rounded-3xl rounded-bl-3xl'>
            <BsPersonFillCheck className='text-2xl'/>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[#0830A6] font-bold text-base'>Atención personalizada</h3>
            <p className='text-xs text-gray-500 font-medium'>Te asesoramos para encontrar la póliza perfecta para tus necesidades. Cada conductor es único y tu seguro también debería serlo.</p>
          </div>
        </article>
        <article className='flex justify-center items-start gap-2 w-[20rem] h-[12rem] lg:h-[10rem] bg-white p-5 shadow-xl'>
          <div className='bg-white text-[#0830A6] p-2 flex justify-center items-center shadow-md border-4 border-[#f29494] rounded-3xl rounded-bl-3xl'>
            <TbDiscount2 className='text-2xl'/>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[#0830A6] font-bold text-base'>Descuentos exclusivos</h3>
            <p className='text-xs text-gray-500 font-medium'>Bonificaciones especiales por baja siniestralidad.</p>
          </div>
        </article>
        <article className='flex justify-center items-start gap-2 w-[20rem] h-[12rem] lg:h-[10rem] bg-white p-5 shadow-xl'>
          <div className='bg-white text-[#0830A6] p-2 flex justify-center items-center shadow-md border-4 border-[#f29494] rounded-3xl rounded-bl-3xl'>
            <FaBuildingCircleCheck className='text-2xl'/>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[#0830A6] font-bold text-base'>Compañía de primera línea</h3>
            <p className='text-xs text-gray-500 font-medium'>Amplia trayectoria, respaldo y confiabilidad, para que tu patrimonio esté resguardado.</p>
          </div>
        </article>
      </section>
      <section className='flex justify-center items-center gap-10 px-10 py-20  cursor-default'>
        <div className='hidden lg:block h-[30rem] w-[50%] rounded-bl-[40rem] rounded-tl-[6rem] border-l-[1rem] border-[#F29494] relative z-10'>
                <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1711602630/fondo-familia-feliz_ul4eh6_upscayl_2x_realesrgan-x4plus_iyuupc.png" alt="" className='w-full h-full object-cover rounded-bl-[25rem] rounded-tl-[5rem]'/>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710816213/Pizzolato/Vector_1_scvdbk.svg" alt="" className='absolute top-0 right-20 -z-10 w-[20rem] animate-pulse'/>
        </div>
        <div className='lg:w-[50%] flex flex-col gap-3'>
          <form ref={refForm} onSubmit={handleSubmit} className='lg:w-[35rem] flex flex-col gap-5'>
            <h2 className='text-[#0830A6] font-bold lg:text-2xl text-3xl text-center lg:text-start'>Cotizá gratis con nosotros</h2>
            <div className='flex flex-col justify-center lg:flex lg:flex-row lg:justify-between items-center gap-5'>
              <div className='flex flex-col gap-2 w-full'>
                <label className='font-bold text-[#0830A6]' htmlFor="username">Nombre *</label>
                <input
                  name='username'
                  id="username"
                  value={data.username}
                  onChange={handleChange}
                  type="text" placeholder='Ingresá tu nombre' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500' />
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
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label className='font-bold text-[#0830A6]' htmlFor="email">Correo electrónico *</label>
              <input
                name='email'
                id="email"
                value={data.email}
                onChange={handleChange}
                type="email" placeholder='Ingresá tu correo electrónico' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-bold text-[#0830A6]' htmlFor="marca">Marca *</label>
              <input
                name='marca'
                id="marca"
                value={data.marca}
                onChange={handleChange}
                type="text" placeholder='Ingresá la marca de tu vehículo' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-bold text-[#0830A6]' htmlFor="modelo">Modelo *</label>
              <input
                name='modelo'
                id="modelo"
                value={data.modelo}
                onChange={handleChange}
                type="text" placeholder='Ingresá el modelo de tu vehículo' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-bold text-[#0830A6]' htmlFor="year">Año *</label>
              <input
                name='year'
                id="year"
                value={data.year}
                onChange={handleChange}
                type="text" placeholder='Ingresá el año de tu vehículo' className='text-sm font-medium focus:border-r-8 focus:border-[#f29494] focus:outline-none duration-300 rounded-tr-[5rem] outline-none p-4 shadow-md text-gray-500' />
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

export default DetailAutomotores