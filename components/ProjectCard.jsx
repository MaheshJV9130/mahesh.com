"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaCode } from "react-icons/fa";

const ProjectCard = ({ preview, title, github, desc, link }) => {
  const [isHover, setIsHover] = useState(false);
  

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="w-full md:w-[33%] rounded-xl m-2 overflow-hidden shadow-lg group cursor-pointer"
    >
      <div className="relative w-full h-56">
        <img
          src={preview}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-500 rounded-t-xl ${
            isHover ? "blur-[2px] scale-105" : ""
          }`}
        />

        <div
          className={`absolute inset-0 flex flex-col justify-center items-center gap-3 text-center px-4 transition-opacity duration-500 ${
            isHover ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex gap-4">
            <Link
              href={link}
              target="_blank"
              className="flex items-center gap-2 bg-slate-950 text-white px-3 py-2 rounded-xl hover:bg-slate-800 transition"
            >
              <FaEye /> View
            </Link>
            <Link
              href={github}
              target="_blank"
              className="flex items-center gap-2 bg-slate-950 text-white px-3 py-2 rounded-xl hover:bg-slate-800 transition"
            >
              <FaCode /> Code
            </Link>
          </div>

          <p className="text-xl text-sky-600">{desc}</p>
        </div>
      </div>

      <div className="bg-yellow-400 text-center py-3 rounded-b-xl">
        <p className="text-xs md:text-xl font-bold">{title}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
