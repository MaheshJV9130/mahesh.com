import React from "react";
import BgVideo from "@/components/BgVideo";

import Link from "next/link";
import { FaAngleDown } from 'react-icons/fa';
import Image from "next/image";
const Intro = () => {
  return (
    <section id="home" className="relative w-screen h-screen  overflow-hidden">
      <BgVideo />

      <div className="relative z-10 flex  w-full  items-center justify-center md:px-6 md:py-8 mx-auto h-[80%] md:h-full">
        <div className="md:h-1/2  md:w-1/2 text-center">
          <div className="md:text-5xl text-3xl text-blue-950 font-bold m-3">Hello,</div>
          <div className="mdtext-5xl text-3xl text-blue-950 font-bold m-3">
            I am Mahesh Vispute
          </div>
          <p className="text-2xl text-wrap m-3">
            BTech CSE student & MERN Stack developer building web applications
            that deliver results
          </p>
          

            <Link className="bg-blue-950 shadow shadow-blue-500 text-white p-2 w-fit mx-auto flex justify-center items-center gap-2  m-3 rounded-2xl cursor-pointer" href="#about">
              <p>About Me </p>
            <FaAngleDown/>
            </Link>
          <ul className="flex justify-center items-center gap-3 w-fit p-3 bg-sky-100 rounded-xl mx-auto">
            <li>
              <Link href='#'>
                <Image src="/github.svg" alt="github" width={50} height={50}/>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <Image src="/linkedin.svg" alt="github" width={50} height={50}/>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <Image src="/x.svg" alt="github" width={50} height={50}/>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <Image src="/insta.svg" alt="github" width={50} height={50}/>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <Image src="/telegram.svg" alt="github" width={50} height={50}/>
              </Link>
            </li>
          </ul>
         
        </div>
      </div>
    </section>
  );
};

export default Intro;
