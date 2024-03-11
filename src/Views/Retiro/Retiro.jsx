import React from 'react'
import { MdOutlineSavings } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaRegCircleDot } from "react-icons/fa6";


const Profesionales = () => {



  return (
    <div className='pt-28 bg-[url("https://res.cloudinary.com/dfschbyq2/image/upload/v1709934852/Dise%C3%B1o_sin_t%C3%ADtulo_22_stzrcm.png")] bg-center bg-no-repeat'>
      <h3 className='pl-5 pb-5 font-semibold text-blue-950 text-2xl'>Seguro de retiro</h3>
      <Link to='/' className='ml-5 border-2 px-2 rounded-full border-blue-950'>Volver al inicio</Link>
      <section className='SEGURO DE RETIRO pb-28 '>
        <h2 className='flex justify-center pt-10 text-4xl font-black text-blue-950'>Tenés un futuro asegurado</h2>
        <section className='flex flex-col items-center space-y-10'>
          <div className='flex flex-col items-center space-y-5 justify-center py-10'>
            <p className='w-[60%] text-center'>
              Un <span className='text-blue-600'>seguro de retiro</span> es un fondo que podés ir acumulando según tus posibilidades de ahorro. Lo construís con contribuciones periódicas y se <span className='text-blue-600'>incrementa mensualmente</span> con las <span className='text-blue-600'>rentabilidades</span> que obtenemos <span className='text-blue-600'>para vos</span>.
            </p>
            <span>Cuanto antes comiences a ahorrar, más fácil será alcanzar tus metas.</span>
            <span className='text-blue-600'> Nosotros nos encargamos del resto.</span>
          </div>
          <div className='flex flex-col items-center py-14  border-2 w-[35%] rounded-2xl shadow-md justify-between transform hover:scale-[1.05] duration-300 hover:shadow-2xl' >
            <MdOutlineSavings className='size-16 text-green-500 pb-2'/>
            <h3 className='flex justify-center text-xl font-semibold text-blue-950 pb-10'>¿Por qué hacer un seguro de retiro?</h3>
            <div className='space-y-4'>
              <div className='flex items-center space-x-3'>
                <FaRegCircleDot className='text-green-500'/>
                <span>Deducción anual en impuestos a las ganancias.</span>
              </div>
              <div className='flex items-center space-x-3'>
                <FaRegCircleDot className='text-green-500'/>
                <span>Capital garantizado por ley.</span>
              </div>
              <div className='flex items-center space-x-3'>
                <FaRegCircleDot className='text-green-500'/>
                <span>Flexibilidad en el monto de tus aportes.</span>
              </div>
              <div className='flex items-center space-x-3'>
                <FaRegCircleDot className='text-green-500'/>
                <span>Forma simple de capitalizarte sin conocimientos de inversión.</span>
              </div>
              <div className='flex items-center space-x-3'>
                <FaRegCircleDot className='text-green-500'/>
                <span>Alta rentabilidad, invirtiendo con especialistas.</span>
              </div>
              <div className='flex items-center space-x-3'>
                <FaRegCircleDot className='text-green-500'/>
                <span>Disposición de tu dinero en cualquier momento.</span>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className='PLANES pt-10 pb-16'>
        <h2 className='flex justify-center pt-10 text-3xl font-bold text-blue-950'>Planes ofrecidos</h2>
        <section className='PLANES RETIRO flex justify-around items-center pt-20'>
          <article className='PLAN FUTURO w-[28%] h-[20rem] flex flex-col items-center justify-between shadow-md rounded-2xl transform hover:scale-[1.02] duration-300'>
            <h4 className='text-center text-xl font-semibold bg-green-300 w-full py-4 cursor-default'>Plan Futuro</h4>
            <p className='px-[5rem] text-center cursor-default'>Con Plan Futuro puedes preservar tu estándar de vida al jubilarte, una opción de ahorro efectiva y diferente a los métodos convencionales.</p>
            <Link to='/retiro/plan-futuro' className='border-2 border-green-300 px-5 py-1 mb-3 hover:bg-green-300 rounded-md'>+ Info</Link>
          </article>
          <article className='PLAN PROYECTO w-[28%] h-[20rem] flex flex-col items-center justify-between shadow-md rounded-2xl transform hover:scale-[1.02] duration-300'>
            <h4 className='text-center text-xl font-semibold bg-orange-300 w-full py-4 cursor-default'>Plan Proyecto</h4>
            <p className='px-[5rem] text-center cursor-default'>¿Cómo puedo planificar mis ahorros para concretar mis sueños?</p>
            <Link to='/retiro/plan-proyecto' className='border-2 border-orange-300 px-5 py-1 mb-3 hover:bg-orange-300 rounded-md'>+ Info</Link>
          </article>
          <article className='PLAN FUTURO w-[28%] h-[20rem] flex flex-col items-center justify-between shadow-md rounded-2xl transform hover:scale-[1.02] duration-300'>
            <h4 className='text-center text-xl font-semibold bg-[#efb810] w-full py-4 cursor-default'>Plan Inversor GOLD</h4>
            <p className='px-[5rem] text-center cursor-default'>¿Cómo puedo maximizar el rendimiento de mis inversiones?</p>
            <Link to='/retiro/plan-inversor-gold' className='border-2 border-[#efb810] px-5 py-1 mb-3 hover:bg-[#efb810] rounded-md'>+ Info</Link>
          </article>
        </section>
      </section>
    </div>
  )
}

export default Profesionales
