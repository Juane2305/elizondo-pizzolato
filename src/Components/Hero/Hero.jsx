

const Hero = () => {
    return (
        <div className='h-screen flex items-center justify-between gap-10'>
            <section className='h-full flex flex-col justify-center items-start gap-6 pl-20'>
                <div className='relative'>
                    <h1 className='text-[#0830A6] font-bold text-[4rem] 2xl:text-[5rem] m-0'>Protegiendo lo más <span className='text-[#F29494] animate-pulse'>importante</span></h1>
                </div>
                <p className='text-sm 2xl:text-lg font-medium text-gray-500 w-[80%] border-l-8 border-r-8 p-2 shadow-md bg-white border-[#F29494] rounded-l-xl rounded-r-xl border-opacity-80'>Somos productores de seguros <span className='text-[#F29494]'>ágiles y flexibles</span> dedicados al asesoramiento integral de seguros y administración de riesgos para <span className='text-[#F29494]'>empresas e individuos</span></p>
                <a href="#seguros" className='bg-[#0830A6] p-4 text-white font-bold border-4 border-[#0830A6] hover:bg-transparent hover:border-[#F29494] hover:text-[#F29494] duration-500'>Opciones de seguros</a>
            </section>
            <section className='mt-40 w-[75rem] 2xl:w-[75rem] 2xl:h-[45rem] h-[40rem] rounded-bl-[26rem] rounded-tl-[6rem] border-l-[1rem] border-[#F29494] relative bg-gradient-to-tr from-[#f4a1a190] to-[#f29494af]'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710904493/iglesia-cristiana-bogota_nywszv.png" alt="" className='w-full h-full object-cover rounded-bl-[25rem] rounded-tl-[5rem]'/>
            </section>
        </div>
    );
};

export default Hero;