"use client";

import Image from 'next/image';
import React from 'react';
import heroImage from "@/public/photo.jpg";
import { motion } from "motion/react"


export default function Hero() {
  return (
    <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
      <div className='text-white flex flex-col justify-center items-center'>

        <motion.div
         initial={{y: -50, opacity: 0}}
         animate={{y: 0, opacity: 1}}
         transition={{duration: .8, delay: .2}}

        >
          <Image 
            src={heroImage} 
            alt='hero' 
            className='w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]' 
          />
        </motion.div>

        <motion.div
          initial={{y: 50, opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition= {{duration: .8, delay: .2}}
        className='max-w-[600px] flex flex-col items-center justify-center gap-3 text-center'>
          <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl mt-10'>Zahin Zawad</h1>
          <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl'>Web Developer</h3>
          <p className='md:text-base text-pretty text-sm text-gray-400'>
            I am a web developer skilled in React, Next.js, and Tailwind, focused on building clean, scalable applications. I am highly dedicated to coding responsive websites and high-converting landing pages. I love exploring new ideas and making them happen in real life. 
            <br/>Let's build something great together!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
