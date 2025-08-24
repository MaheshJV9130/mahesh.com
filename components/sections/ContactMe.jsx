import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri';
import ContactForm from '../ContactForm';
const ContactMe = () => {
  return (
    <section id='contact' className='min-h-fit w-screen bg-sky-200 p-20'>
      <div className='flex mx-auto justify-center items-center gap-2'>
        <RiCustomerService2Fill size={40}/>
        <p className='text-3xl font-bold text-blue-950'>Contact Me</p>
      </div>
    <ContactForm/>
    </section>
  )
}

export default ContactMe
