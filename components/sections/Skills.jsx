import React from "react";
import Skill from "../Skill";
import { FaLaptopCode } from 'react-icons/fa6';
const Skills = () => {
  const skills = [
    {
      name: "ReactJS",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
    },
    {
      name: "ExpressJS",
      icon: "https://img.icons8.com/fluency/48/000000/node-js.png",
    },
    {
      name: "NodeJS",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      name: "Redux",
      icon: "https://img.icons8.com/color/48/000000/redux.png",
    },

    {
      name: "TailwindCSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
    },

    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    },

    {
      name: "Python",
      icon: "https://img.icons8.com/color/48/000000/python--v1.png",
    },
    {
      name: "C++",
      icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/color/48/000000/mongodb.png",
    },

    {
      name: "Netlify",
      icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
    },

    {
      name: "Git",
      icon: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
    },
  ];
  return (
    <section id="skills" className="min-h-[90vh] w-screen bg-zinc-950 md:bg-purple-900 flex flex-col justify-evenly items-center text-white p-20">
       <span className="text-3xl flex gap-3 justify-center mx-auto items-center font-bold"><FaLaptopCode size={40}/> Skills</span> 
        <div className="flex flex-wrap justify-center h-fit p-2 text-white bg-zinc-950 m-20  rounded-xl md:w-[80vw] w-screen">
            {skills.map(skill=>(
                <Skill key={skill.name} name={skill.name} icon={skill.icon}/>
            ))}
        </div>
    </section>
  );
};

export default Skills;
