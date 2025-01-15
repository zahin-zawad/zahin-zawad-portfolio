import React from 'react'
import { BiLogoJavascript, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'

export default function Tech() {
  return (
    <div className='min-h-[70vh] w-full flex flex-col items-center justify-center gap-16 md:gap-32' id='tech'>
      <h1 className='text-white text-4xl font-light md:text-6xl'>Technologies</h1>

      <div className='flex flex-wrap items-center justify-center gap-10 p-5'>
        <div>
          <BiLogoTypescript className='text-sky-500 text-[80px] cursor-pointer transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>
        <div>
          <BiLogoJavascript className='text-orange-500 text-[80px] cursor-pointer transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>
        <div>
          <FaReact className='text-sky-500 text-[80px] cursor-pointer transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>
        <div>
          <BiLogoTailwindCss className='text-sky-500 text-[80px] cursor-pointer transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>
        <div>
          <RiNextjsFill  className='text-gray-500 text-[80px] cursor-pointer transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>
        <div>
          <FaHtml5  className='text-red-500 text-[80px] cursor-pointer transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>
        <div>
          <FaCss3Alt  className='text-blue-500 text-[80px] cursor-pointer transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>

      </div>
    </div>
  )
}
