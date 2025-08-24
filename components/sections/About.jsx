import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import { BsDownload } from 'react-icons/bs';
const About = () => {
  return (
    <section id="about" className="min-h-screen w-screen  bg-white p-20">
      <div className="flex justify-center items-center gap-3 md:mt-10 h-16 w-fit p-4 mx-auto font-bold">
        <FaUser size={40}/>
        <p className="text-3xl">About Me</p>
      </div>
      <div className=" flex md:flex-row flex-col max-w-screen md:mt-5 justify-center items-center mx-auto">
        <div className="w-fit mt-3 md:mx-20">

        <Image src='/profile_2.png' className="rounded-xl" alt='profile' height={330} width={330}/>
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center  w-screen px-2 text-center mt-3">
            <h2 className="text-3xl font-bold">I'm Mahesh Vispute</h2>
            <p className="text-xl">Full Stack Web Developer</p>
            <p className="font-medium">Hi, I'm a passionate Full-Stack Developer based in Nashik, India, currently pursuing my BTech degree from Savitribai Phule Pune University (SPPU). I specialize in building modern web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js), creating seamless user experiences from frontend to backend. As a self-motivated developer, I'm constantly improving my coding skills by building full-stack clones of popular applications, which helps me master real-world development patterns and industry best practices. I'm always excited to take on new challenges and transform innovative ideas into scalable, high-quality web solutions.</p>
            <div className="my-2 "><span className="text-blue-600">Email : </span> maheshvispute9130@gmail.com</div>
            <div className="my-2 "><span className="text-blue-600">Place : </span> Nashik Maharastra , India</div>
            <Link target="_blank" href='/' className="w-fit p-2 my-2 bg-slate-950 text-white flex justify-center items-center gap-2 rounded-xl">
                <p>Resume</p>
                <BsDownload/>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
