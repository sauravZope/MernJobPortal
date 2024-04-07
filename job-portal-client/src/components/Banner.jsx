import React from 'react'
import {FiMapPin, FiSearch} from "react-icons/fi"
const Banner = ({query,handleInputChange}) => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14'>

       <h1 className='text-5xl font-bold text-primary mb-3'>Come build the future with us</h1>
       <p className='text-lg text-black/70 mb-8'>Join a worldwide technology platform that drives success and well-being for the individuals and communities it supports.</p>

       <form> 
        <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
            <div className='flex md:rounded-s-md rounded  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset
            focus-within:ring-indigo-600 md:w-1/2 w-full'>
              <input type='text' name='title' id='title' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 placeholder:text-gray-400 focus:right-0 sm:text-sm sn:leading-6' placeholder='What position are you looking for ?' onChange={handleInputChange} value={query}/>
              <FiSearch className='absolute mt-2.5 ml-2 text-gray-400'/>
            </div> 
            <div className='flex md:rounde-s-none rounded  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset
            focus-within:ring-indigo-600 md:w-1/3 w-full'>
              <input type='text' name='title' id='title' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 placeholder:text-gray-400 focus:right-0 sm:text-sm sn:leading-6' placeholder='location' />
              <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400'/>
            </div>
       <button type='submit' className='bg-blue-600 py-2 px-8 text-white md:rounded-s-none rounded'>Search</button>
        </div>
    
       </form>
    </div>
  )
}

export default Banner