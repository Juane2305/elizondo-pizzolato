import React from 'react';
import { ImageSlider } from '../ImageSlider/ImageSlider';
import { CardHoverEffect } from '../CardHoverEffect/CardHoverEffect';

const Hero = () => {
    return (
        <div>
            <ImageSlider/>
            <section>
                <div className='text-center pt-10'>
                    <h1 className='text-[2rem] font-bold'>Asegura tu futuro: Seguros Patrimoniales y de Vida.</h1>
                </div>
                <div>
                    <CardHoverEffect/>
                </div>
            </section>
        </div>
    );
};

export default Hero;