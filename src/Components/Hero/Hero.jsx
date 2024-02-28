import React from 'react';
import { ImageSlider } from '../ImageSlider/ImageSlider';
import { CardHoverEffect } from '../CardHoverEffect/CardHoverEffect';

const Hero = () => {
    return (
        <div>
            <ImageSlider/>
            <section className='text-center mt-16'>
                    <h1 className='text-[2rem] font-bold text-blue-950'>Cuidá lo que te importa</h1>
                <div className='bg-blue-950 my-16'>
                    <CardHoverEffect/>
                </div>
            </section>
        </div>
    );
};

export default Hero;