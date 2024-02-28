import React from 'react';

const Nosotros = () => {
    return (
        <div className=''>
            <h2 className='text-center text-blue-950 text-[2rem] font-bold'>Sobre Nosotros</h2>
            <section className='flex items-center py-20'>
                <div className='w-1/2 h-[30rem] flex flex-col justify-between pl-24'>
                    <div >
                        <h3 className='text-blue-950 text-[18px] font-semibold'>¿Quiénes somos?</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, repudiandae nesciunt eaque placeat, excepturi distinctio soluta asperiores blanditiis recusandae quae porro amet nemo delectus. Similique sapiente magnam quae saepe laborum.</p>
                    </div>
                    <div className='pr-20'>
                        <h3 className='text-blue-950 text-[18px] font-semibold'>Misión</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, repudiandae nesciunt eaque placeat, excepturi distinctio soluta asperiores blanditiis recusandae quae porro amet nemo delectus. Similique sapiente magnam quae saepe laborum.</p>
                    </div>
                    <div>
                        <h3 className='text-blue-950 text-[18px] font-semibold'>¿Quiénes somos?</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, repudiandae nesciunt eaque placeat, excepturi distinctio soluta asperiores blanditiis recusandae quae porro amet nemo delectus. Similique sapiente magnam quae saepe laborum.</p>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1709080425/Seguros-16_1_wb4vtq.jpg" alt="" className='rounded-l-full'/>
                </div>
            </section>
        </div>
    );
};

export default Nosotros;