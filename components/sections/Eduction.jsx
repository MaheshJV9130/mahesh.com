import React from "react";
import College from "../College";
import Image from "next/image";

const Eduction = () => {
  return (
    <section id="eduction" className="min-h-[90vh] bg-blue-200 w-screen p-2">
      <div className="flex mx-auto justify-center items-center gap-2 text-3xl p-20 font-bold">
        <Image src="/graduate.png" alt="graduate" height={40} width={40} />
        <div>
          My <span className="text-purple-700">Eduction</span>
        </div>
      </div>
      <div className="w-[80%] mx-auto m-5">
        <College
          img={"/matoshri.jpg"}
          degree={"BTech CSE"}
          name={"Matoshri College of engineering and research Nashik | SPPU"}
          startYr={2025}
          endYr={2029}
          status={"Pursuing"}
        />
      </div>
    </section>
  );
};

export default Eduction;
