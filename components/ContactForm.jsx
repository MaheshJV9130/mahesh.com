"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Image from "next/image";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, event) => {
   console.log(data)
  };

  return (
    <div className="ring-2 md:w-[70vw] md:h-[50vh] w-fit h-fit ring-gray-600 rounded-xl bg-white md:flex-row flex-col p-1 flex md:justify-evenly items-center mt-5 md:mx-auto">
      
      
      <div className="flex justify-center md:w-1/2 w-full">
        <Image
          src="/communication.jpg"
          alt="communication"
          width={400}
          height={400}
          className="object-contain max-w-full h-auto"
        />
      </div>

      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-1/2 w-full flex flex-col gap-3"
      >
        {/* Name */}
        <div className="flex w-full">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <FaUser />
          </span>
          <input
            {...register("name", { required: true })}
            type="text"
            className="flex-1 min-w-0 p-2.5 text-sm text-white bg-gray-700 border border-gray-600 placeholder-gray-400 rounded-r-md outline-0"
            placeholder="Bonnie Green"
          />
        </div>

        {/* Email */}
        <div className="flex w-full">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <AiFillMail />
          </span>
          <input
            {...register("email", { required: true })}
            type="email"
            className="flex-1 min-w-0 p-2.5 text-sm text-white bg-gray-700 border border-gray-600 placeholder-gray-400 rounded-r-md outline-0"
            placeholder="example@gmail.com"
          />
        </div>

        {/* Phone */}
        <div className="flex w-full">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <FaPhoneAlt />
          </span>
          <input
            {...register("phone", { required: true })}
            type="tel"
            className="flex-1 min-w-0 p-2.5 text-sm text-white bg-gray-700 border border-gray-600 placeholder-gray-400 rounded-r-md outline-0"
            placeholder="987654321"
          />
        </div>

        {/* Message */}
        <div className="flex w-full">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <FaMessage />
          </span>
          <textarea
            {...register("msg", { required: true })}
            className="flex-1 min-w-0 p-2.5 text-sm text-white bg-gray-700 border border-gray-600 placeholder-gray-400 rounded-r-md outline-0"
            placeholder="Hello World..!"
          />
        </div>


        <input
          value="Submit"
          type="submit"
          className="bg-blue-950 text-white p-2  rounded-xl self-center cursor-pointer"
        />
      </form>
    </div>
  );
};

export default ContactForm;
