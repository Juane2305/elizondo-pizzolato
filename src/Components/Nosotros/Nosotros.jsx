
const Nosotros = () => {
    return (
      <div className='lg:flex lg:flex-row flex flex-col justify-center items-center lg:items-start gap-20 lg:gap-10 px-10 lg:px-20 pb-10 pt-10' id="nosotros">
        <section className='lg:w-1/2 flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3'>
          <h2 className='text-3xl text-center lg:text-start lg:text-4xl font-bold text-[#0830A6]'>Nos centramos en el beneficio del cliente</h2>
          <p className='text-[#f29494] text-center lg:text-start font-bold border-[#f29494] border-b-2 text-sm pb-1 w-[8rem]'>SEGUROS</p>
          <p className='pt-5 text-md opacity-70 font-medium lg:w-[80%] text-center lg:text-start'>En "Elizondo Pizzolato", con más de <span className="text-[#0830A6]">25 años de experiencia</span> en la industria de seguros, nos comprometemos a ofrecer <span className="text-[#0830A6]">soluciones confiables y personalizadas</span> para cubrir tus necesidades. Nuestra larga trayectoria en el mercado nos respalda como <span className="text-[#0830A6]">expertos en la protección patrimonial y personal</span>. Con un enfoque centrado en el cliente, buscamos establecer relaciones duraderas y brindar tranquilidad en cada póliza.</p>
          <article className='flex flex-col lg:flex lg:flex-col sm:flex sm:flex-row gap-8 pt-5'>
            <div className='flex justify-start items-center gap-1'>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710458452/Pizzolato/shield-halved-solid_ykfq6d.svg" alt="" className='w-6'/>
              <p className='text-[#0830A6] text-md font-bold'>Experiencia y Trayectoria.</p>
            </div>
            <div className='flex justify-start items-center gap-1'>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710458452/Pizzolato/shield-halved-solid_ykfq6d.svg" alt="" className='w-6'/>
              <p className='text-[#0830A6] text-md font-bold'>Personalización y Atención al Cliente.</p>
            </div>
            <div className='flex justify-start items-center gap-1'>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710458452/Pizzolato/shield-halved-solid_ykfq6d.svg" alt="" className='w-6'/>
              <p className='text-[#0830A6] text-md font-bold'>Compromiso con la Calidad y la Confianza.</p>
            </div>
          </article>
        </section>
        <section  className='lg:w-1/2 relative'>
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710457786/Pizzolato/Seguros-19_lozatf.webp" alt="" className='shadow-xl rounded-tl-[6rem]'/>
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710459454/Pizzolato/Rectangle_5_1_wolcxp.svg" alt="" className='absolute -bottom-8 right-0 -z-10 animate-pulse w-[15rem] lg:w-full'/>
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710459950/Pizzolato/asset_2_o8fnn4.svg" alt="" className='absolute -top-10 lg:-right-10 -right-5 -z-10 animate-pulse lg:w-28 w-20'/>
        </section>
      </div>
    );
};

export default Nosotros;