import React from 'react'
import image1 from '@/public/1.png'
import image2 from '@/public/2.png'
import image3 from '@/public/3.png'
import image4 from '@/public/4.png'
import image5 from '@/public/5.png'
import {motion} from 'motion/react'
import Image, { StaticImageData } from 'next/image'


const projectData = [
  {
    image: image1,
    title: "Habit Tracker",
    description: "A simple habit tracker app built with React and Tailwind CSS. It allows users to add habits and track their progress.",
    technologies: ["React", "Tailwind CSS"],
    github: "#",
    live: "#"
  },

  {
    image: image2,
    title: "Todo App",
    description: "A simple todo app built with React and Tailwind CSS. It allows users to add, delete, and mark todos as completed.",
    technologies: ["TypeScript","Next.js","React", "Tailwind CSS"],
    github: "#",
    live: "#"
  },

  {
    image: image3,
    title: "Social Media App",
    description: "A simple todo app built with React and Tailwind CSS. It allows users to add, delete, and mark todos as completed.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    github: "#",
    live: "#"
  },

  {
    image: image4,
    title: "Restaurant Website",
    description: "A simple todo app built with React and Tailwind CSS. It allows users to add, delete, and mark todos as completed.",
    technologies: ["React", "Tailwind CSS"],
    github: "#",
    live: "#"
  },

  {
    image: image5,
    title: "Admin Dashboard",
    description: "A simple todo app built with React and Tailwind CSS. It allows users to add, delete, and mark todos as completed.",
    technologies: ["React", "Tailwind CSS"],
    github: "#",
    live: "#"
  },
]


interface Project {
  image: StaticImageData;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
}

const ProjectCard = ({project}: {project: Project}) => {
  return (
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
      <Image src={project.image} alt={project.title} className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]' />

      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-3'>
          <div className='text-xl font-semibold'>{project.title}</div>
          <p className='text-gray-400'>{project.description}</p>
        </div>

        <div className='flex flex-wrap gap-5'>
          {
            project.technologies.map((tech, index) =>(
              <span key={index} className='rounded-lg p-3 bg-black'>{tech}</span>
            ))
          }
        </div>

        <div className='flex gap-5'>
        <a href={project.github} className='text-nowrap rounded-lg border border-indigo-600 bg-black text-white px-5 py-3 text-lg font-bold shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600'>Github</a>
        <a href={project.live} className='text-nowrap rounded-lg border border-indigo-600 bg-black text-white px-5 py-3 text-lg font-bold shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600'>Live</a>
        </div>
      </div>


    </div>
  )
}

export default function Projects() {
  return (
    <div id='projects' className='min-h-screen w-full flex flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'>
      <h1 className='text-4xl font-light text-white md:text-6xl'>My Projects</h1>

      <div className='max-w-[1000px] w-full text-white flex flex-col gap-16'>
        {
          projectData.map((project, index) =>(
            <ProjectCard key={index} project={project}/>
          ))
        }
      </div>
    </div>
  )
}
