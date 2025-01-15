import React from 'react'

export default function Contact() {
  return (
    <div id='contact' className='min-h-[70vh] min-w-full'>
      <div className='flex flex-col items-center justify-center gap-3 space-y-6 p-14'>
        <h1 className='text-center text-5xl md:text-7xl bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'>Get in Touch</h1>

        <p className='text-center text-lg font-semibold text-gray-500'>Want to chat? Send me an E-mail through this button and I'll respond whenever I can.</p>

        <a href="mailto:zahin.zawad.19@gmail.com" className='text-nowrap rounded-lg border border-indigo-600 bg-black text-white px-5 py-3 text-lg font-bold shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600'>Contact Me</a>
      </div>
    </div>
  )
}
