import Image from "next/image";
import React from "react";

const College = ({ name, img, degree, startYr, endYr, status }) => {
  return (
    <div className="flex md:flex-row flex-col justify-start gap-10 items-center bg-white m-2 drop-shadow-xs drop-shadow-blue-400 p-2 rounded-xl">
      <Image
        src={img}
        className="object-cover rounded-xl"
        alt={name}
        width={400}
        height={400}
      />
      <div className="text-center md:text-left">
        <h3 className="md:text-3xl text-2xl text-blue-950">{degree}</h3>
        <p className="md:text-xl textxs`">{name}</p>
        <p className="text-green-800 font-bold">
          {startYr} - {endYr} | {status}
        </p>
      </div>
    </div>
  );
};

export default College;
