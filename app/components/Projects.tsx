import React from 'react'
import image1 from '@/public/1.png'
import image2 from '@/public/2.png'
import image3 from '@/public/3.png'
import image4 from '@/public/4.png'
import image5 from '@/public/5.png'
import {motion} from 'motion/react'


const projectData = [
  {
    image: image1,
    tittle: "Habit Tracker",
    description: "A simple habit tracker app built with React and Tailwind CSS. It allows users to add habits and track their progress.",
    technologies: ["React", "Tailwind CSS"],
    github: "#",
    live: "#"
  },

  {
    image: image2,
    tittle: "Todo App",
    description: "A simple todo app built with React and Tailwind CSS. It allows users to add, delete, and mark todos as completed.",
    technologies: ["TypeScript","Next.js","React", "Tailwind CSS"],
    github: "#",
    live: "#"
  },

  {
    image: image3,
    tittle: "Social Media App",
    description: "A simple todo app built with React and Tailwind CSS. It allows users to add, delete, and mark todos as completed.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    github: "#",
    live: "#"
  },

  {
    image: image4,
    tittle: "Restaurant Website",
    description: "A simple todo app built with React and Tailwind CSS. It allows users to add, delete, and mark todos as completed.",
    technologies: ["React", "Tailwind CSS"],
    github: "#",
    live: "#"
  },

  {
    image: image5,
    tittle: "Admin Dashboard",
    description: "A simple todo app built with React and Tailwind CSS. It allows users to add, delete, and mark todos as completed.",
    technologies: ["React", "Tailwind CSS"],
    github: "#",
    live: "#"
  },
]

export default function Projects() {
  return (
    <div id='projects'>Projects</div>
  )
}
