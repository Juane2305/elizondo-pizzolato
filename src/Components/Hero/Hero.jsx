

const Hero = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-between lg:gap-10'>
            <section className='h-full flex flex-col justify-center items-center pt-10 lg:pt-0 lg:items-start gap-10 lg:gap-6 lg:pl-20'>
                <div className='relative'>
                    <h1 className='text-[#0830A6] font-bold text-center lg:text-start text-5xl lg:text-[4rem] 2xl:text-[5rem] m-0'>Protegiendo lo más <span className='text-[#F29494] animate-pulse'>importante</span></h1>
                </div>
                <p className='text-sm text-center lg:text-start 2xl:text-lg font-medium text-gray-500 w-[80%] border-l-8 border-r-8 p-2 shadow-md bg-white border-[#F29494] rounded-l-xl rounded-r-xl border-opacity-80'>Somos productores de seguros <span className='text-[#F29494]'>ágiles y flexibles</span> dedicados al asesoramiento integral de seguros y administración de riesgos para <span className='text-[#F29494]'>empresas e individuos</span></p>
                <a href="#seguros" className='bg-[#0830A6] p-4 text-white font-bold border-4 border-[#0830A6] hover:bg-transparent hover:border-[#F29494] hover:text-[#F29494] duration-500'>Opciones de seguros</a>
            </section>
            <section className='lg:mt-40 lg:w-[75rem] 2xl:w-[75rem] 2xl:h-[45rem] lg:h-[40rem] border-b-[1rem] lg:border-b-0 rounded-t-full lg:rounded-t-none lg:rounded-bl-[26rem] lg:rounded-tl-[6rem] lg:border-l-[1rem] border-[#F29494] relative bg-gradient-to-tr from-[#f4a1a190] to-[#f29494af]'>
                <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1711603985/iglesia-cristiana-bogota_nywszv_upscayl_2x_realesrgan-x4plus_n3wxlp.png" alt="" className='w-full h-full object-cover lg:rounded-bl-[25rem] lg:rounded-tl-[5rem]'/>
            </section>
        </div>
    );
};

export default Hero;