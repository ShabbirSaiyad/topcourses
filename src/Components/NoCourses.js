import React from 'react'
import { BiSolidErrorAlt } from "react-icons/bi";

const NoCourses = () => {
    const styleC = {color: "white" , fontSize:'5rem' } ;
  return (
    <div className='flex flex-col justify-center items-center bg-[#427D9D] gap-1'>
        <BiSolidErrorAlt  style={styleC} />
        <p className='text-white font-semibold text-3xl'>Courses not found</p>
        

    </div>
  )
}

export default NoCourses