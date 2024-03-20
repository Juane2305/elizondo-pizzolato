import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
 
export function ImageSlider() {
  const images = [
    "https://res.cloudinary.com/dreso9ye9/image/upload/a_hflip/v1710808276/Pizzolato/kelli-mcclintock-wBgAVAGjzFg-unsplash_1_ggjagw.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1710817419/Pizzolato/jessica-rockowitz-6c4Uhhe68yQ-unsplash_1_xkypup.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1710808603/Pizzolato/kelly-sikkema-XXherw1ujoI-unsplash_omdnzx.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1710769868/Pizzolato/abuelos-conviviendo-con-nietos-gettyimages_evijnl.jpg",
    "https://res.cloudinary.com/dreso9ye9/image/upload/v1710817413/Pizzolato/axel-antas-bergkvist-_PDndqdsA3o-unsplash_xmppp8.jpg"
  ];
  return (
    <ImagesSlider className="w-[80%] rounded-bl-[40rem] border-l-[5rem] border-[#F29494]" images={images}>

    </ImagesSlider>
  );
}