import { AnimatedPin } from '@/Components/AnimatedPin/AnimatedPin'
import React from 'react'
import { Link } from 'react-router-dom'

const Personas = () => {
  return (
    <div className='pt-28 bg-[url("https://res.cloudinary.com/dfschbyq2/image/upload/v1710273702/cornered-stairs_1_zhxunl.png")] bg-center bg-cover'>
      <h2 className='pl-5 font-semibold text-blue-950 text-2xl pb-4'>Seguros para personas</h2>
      <Link to='/' className='ml-5 border-2 px-2 rounded-full border-blue-950'>Volver al inicio</Link>
      <div className='flex flex-col items-center justify-center '>
        <h3 className='text-center text-2xl font-black text-blue-950'>Protege tu vida y tus bienes</h3> 
        <p className='w-[70%] pt-7 text-center opacity-80'>Enfrenta el futuro con confianza sabiendo que <span className='text-blue-900'>estás protegido</span>. Nuestros seguros ofrecen <span className='text-blue-900'>tranquilidad y seguridad</span> para ti y tu familia en todas las áreas importantes de tu vida, desde tu hogar hasta tu vehículo y más allá. Con coberturas flexibles y atención personalizada, te brindamos la tranquilidad que necesitas para <span className='text-blue-900'>vivir sin preocupaciones</span>.</p>
        <span className='py-5 opacity-90 font-semibold'>Cotizá tu seguro</span>
      </div>
      <section className='flex flex-col pb-20'>
        <article className='flex'>
          <AnimatedPin redireccion='/personas/automotores' imagen="https://res.cloudinary.com/dfschbyq2/image/upload/v1710263333/StockSnap_LDB9JJWXQU_1_dc7h9q.jpg" titulo="Automotores" descripcion="Asegurá tu vehículo con la mejor cotización del mercado"/>
          <AnimatedPin redireccion='/personas/hogar' imagen="https://res.cloudinary.com/dfschbyq2/image/upload/v1710263562/StockSnap_20HXQ0Y5YI_1_off4th.jpg" titulo="Hogar" descripcion="Protege tu hogar y tus bienes con nuestro seguro para propiedades."/>
          <AnimatedPin redireccion='/personas/incendio' imagen="https://res.cloudinary.com/dfschbyq2/image/upload/v1710270356/guido-jansen-Nz-zAt4qiuU-unsplash_wft6dx.jpg" titulo="Incendio" descripcion="Asegura tus propiedades con nuestra cobertura contra incendios."/>
        </article>
        <article className='flex'>
          <AnimatedPin redireccion='/personas/accidentes-personales' imagen="https://res.cloudinary.com/dfschbyq2/image/upload/v1710271012/mkjr_-2zUjvV0M9dQ-unsplash_1_aqnprr.jpg" titulo="Accidentes Personales" descripcion="Asegura tu bienestar y el de tu familia con nuestro seguro de accidentes personales."/>
          <AnimatedPin redireccion='/personas/moto' imagen="https://res.cloudinary.com/dfschbyq2/image/upload/v1710271097/StockSnap_IDHVGQ9P8R_1_olglv0.jpg" titulo="Moto" descripcion="Seguridad sobre dos ruedas. Asegura tu moto con nosotros."/>
          <AnimatedPin redireccion='/personas/responsabilidad-civil' imagen="https://res.cloudinary.com/dfschbyq2/image/upload/v1710271163/seguro-responsabilidad-civil-empresas_njhcih.webp" titulo="Responsabilidad Civil Profesional" descripcion="Protege tu carrera y tu negocio con nuestro seguro de responsabilidad civil profesional."/>
        </article>

      </section>
    </div>
  )
}

export default Personas
