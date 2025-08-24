import React from "react";
import ProjectCard from "../ProjectCard";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      preview: "/projects/chai.png",
      title: "Get Me A Chai",
      github: "https://github.com/MaheshJV9130/chaipecharcha",
      link: "https://chaipecharcha.vercel.app/",
      decs: "Petreon clone using NextJS + MongoDB",
    },
    {
      preview: "/projects/thechat.png",
      title: "The chat io",
      github: "https://github.com/MaheshJV9130/chat-io",
      link: "https://chat-io-omega-one.vercel.app/",
      decs: "Real time chat app using NextJS + SocketIO",
    },
    {
      preview: "/projects/shop.png",
      title: "E-commerce Frontend",
      github: "https://github.com/MaheshJV9130/prototype_01",
      link: "https://shop-prototype-01.netlify.app/",
      decs: "E-Commerce Frontend using React + Redux",
    },
    {
      preview: "/projects/todo.png",
      title: "Todo App",
      github: "https://github.com/MaheshJV9130/Todo",
      link: "https://itask-s.netlify.app/",
      decs: "Todo app using React",
    },
  ];
  return (
    <section id="projects" className="min-h-[90vh] bg-blue-950 p-20">
      <div className="flex justify-center items-center gap-2 text-3xl text-yellow-600 font-bold">
        <Image
          src="/projects.png"
          alt="projects"
          width={40}
          height={40}
          className="invert-100"
        />{" "}
        Projects
      </div>
      <div className="md
      :w-[90vw] w-fit min-h-screen mt-12 mx-auto flex justify-center items-center flex-wrap">
        {projects.map(pr=>(

        <ProjectCard key={pr.title} desc={pr.desc} preview={pr.preview} title={pr.title} link={pr.link} github={pr.github}/>
        ))}
      </div>
    </section>
  );
};

export default Projects;
