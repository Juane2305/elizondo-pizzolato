import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
 
export function ImageSlider() {
  const images = [
    "https://res.cloudinary.com/dfschbyq2/image/upload/v1708984819/natalya-zaritskaya-SIOdjcYotms-unsplash_artxcj.jpg",
    "https://res.cloudinary.com/dfschbyq2/image/upload/v1708984666/tabea-schimpf-O7WzqmeYoqc-unsplash_pmmsim.jpg",
    "https://res.cloudinary.com/dfschbyq2/image/upload/v1708985380/towfiqu-barbhuiya-05XcCfTOzN4-unsplash_iarf0y.jpg",
  ];
  return (
    <ImagesSlider className="h-[45rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center md:text-start  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        Protegiendo lo más <br /> importante
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-blue-900/20 border-blue-950/20 text-white mx-auto md:mr-auto md:mx-0  text-center rounded-full relative mt-4">
          <span>Seguros patrimoniales y de vida →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-gray-600 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}