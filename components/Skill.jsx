import React from 'react'

const Skill = ({name , icon}) => {
  return (
    <div className='bg-slate-800 m-2 md:m-4 p-2 w-[150px] h-[150px] flex flex-col justify-center items-center rounded-xl'>
      <img width={50}  src={icon} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default Skill
