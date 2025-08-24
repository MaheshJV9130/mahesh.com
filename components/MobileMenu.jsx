import Link from "next/link";
import React, { useRef } from "react";

const MobileMenu = ({onclick , ref}) => {
   
  return (
    <ol ref={ref} className="absolute top-[100%] flex flex-col justify-center items-center right-0 m-1 bg-white h-40 w-40 text-center">
      <li onClick={onclick}>
        <Link href="#home">Home</Link>
      </li>
      <li onClick={onclick}>
        <Link href="#about">About</Link>
      </li>
      <li onClick={onclick}>
        <Link href="#skills">Skill</Link>
      </li>
      <li onClick={onclick}>
        <Link href="#eduction">Eduction</Link>
      </li>
      <li onClick={onclick}>
        <Link href="#projects">Projects</Link>
      </li>
      <li onClick={onclick}>
        <Link href="#contact">Contact</Link>
      </li>
    </ol>
  );
};

export default MobileMenu;
