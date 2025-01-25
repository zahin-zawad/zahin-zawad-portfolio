import React from "react";
import image1 from "@/public/1.png";
import image2 from "@/public/2.png";
import image3 from "@/public/3.png";
import image4 from "@/public/4.png";
import image5 from "@/public/5.png";
import image6 from "@/public/6.png";
import image7 from "@/public/7.png";
import Image, { StaticImageData } from "next/image";

const projectData = [
  {
    image: image1,
    title: "Coffee Shop Website",
    description:
      "Complete Responsive Coffee Shop Website Using ReactJS, Tailwind CSS & Framer Motion",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/zahin-zawad/zawads-cafe",
    live: "https://zawads-cafe-o2hl.vercel.app/",
  },

  {
    image: image2,
    title: "Restaurant Website",
    description:
      "Modern Animated Restaurant Website using ReactJS + Tailwind + Framer-Motion",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/zahin-zawad/Foodies",
    live: "https://foodies-cyan.vercel.app/",
  },

  {
    image: image3,
    title: "Amazon Clone",
    description: "Amazon Homepage UI Clone",
    technologies: ["Vite", "React", "JSX", "CSS", "JavaScript"],
    github: "https://github.com/zahin-zawad/ecommerce-website-using-react",
    live: "https://ecommerce-website-using-react-mu.vercel.app/",
  },

  {
    image: image4,
    title: "CRUD Admin Dashboard",
    description:
      "A simple Dashboard built with React and Tailwind CSS. It allows users to add, delete and edit products",
    technologies: ["Vite", "React", "Tailwind CSS"],
    github: "https://github.com/zahin-zawad/CRUD-Dashboard",
    live: "https://crud-dashboard-sigma.vercel.app/",
  },

  {
    image: image5,
    title: "Weather App",
    description:
      "Created a weather application with a clean and intuitive user interface to display currentweather and forecasts. Integrated the OpenWeatherMap API for real-time weather data and used Axios for APIrequests.Implemented responsive design principles to ensure compatibility across various devices and screen sizes.",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/zahin-zawad/weather-app-using-React",
    live: "https://weather-app-using-react-seven.vercel.app/",
  },
  {
    image: image6,
    title: "Password Generator",
    description:
      "A simple Password generator app built with Vite and Tailwind CSS. It allows users generate random password",
    technologies: ["Vite", "React", "Tailwind CSS"],
    github: "https://github.com/zahin-zawad/password-generator",
    live: "https://password-generator-eosin-nine.vercel.app/",
  },
  {
    image: image7,
    title: "Todo App",
    description:
      "A simple todo app built with React and Tailwind CSS. It allows users to add, delete, and mark todos as completed.",
    technologies: ["Create React App", "JSX", "HTML", "CSS"],
    github: "https://github.com/zahin-zawad/todo-list-using-React",
    live: "https://todo-list-using-react-tau.vercel.app/",
  },
];

interface Project {
  image: StaticImageData;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <Image
        src={project.image}
        alt={project.title}
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
      />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-lg p-3 bg-black">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-5">
          <a
            href={project.github}
            target="_blank"
            className="text-nowrap rounded-lg border border-indigo-600 bg-black text-white px-5 py-3 text-lg font-bold shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
          >
            Github
          </a>
          <a
            href={project.live}
            target="_blank"
            className="text-nowrap rounded-lg border border-indigo-600 bg-black text-white px-5 py-3 text-lg font-bold shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <h1 className="text-4xl font-light text-white md:text-6xl">
        My Projects
      </h1>

      <div className="max-w-[1000px] w-full text-white flex flex-col gap-16">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
