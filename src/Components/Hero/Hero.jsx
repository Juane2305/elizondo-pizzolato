import React from 'react';
import { ImageSlider } from '../ImageSlider/ImageSlider';
import { CardHoverEffect } from '../CardHoverEffect/CardHoverEffect';

const Hero = () => {
    return (
        <div>
            <ImageSlider/>
            <div className='w-full flex justify-center items-center'>
                <div className="border-t-2 border-blue-950 w-[20%] my-16 animate-pulse duration-2000"></div>
            </div>
            <section className='text-center mb-16'>
                <div className='bg-blue-950 flex flex-col xl:flex-row items-center justify-evenly w-full'>
                    <h1 className='text-[30px] font-bold text-white pt-10 xl:pt-0'>Contratá tu seguro</h1>
                    <CardHoverEffect/>
                </div>
            </section>
        </div>
    );
};

export default Hero;